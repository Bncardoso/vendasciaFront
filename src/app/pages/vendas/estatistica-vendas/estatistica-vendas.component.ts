import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VendasDto } from '../../../api/models/vendas-dto';
import { VendasControllerService } from '../../../api/services/vendas-controller.service';

@Component({
  selector: 'app-estatistica-vendas',
  templateUrl: './estatistica-vendas.component.html',
  styleUrls: ['./estatistica-vendas.component.scss']
})
export class EstatisticaVendasComponent implements OnInit {
  columnChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Gráfico de Colunas [Quantidade de vendas, Valor Total e Produto]',
    },
    data: [
      {
        type: 'column',
        dataPoints: [] as { label: string, y: number, valorTotal: number }[],
      },
    ],
  };
  pieChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Gráfico de Pizza [Produtos com mais vendas]',
    },
    data: [
      {
        type: 'pie',
        dataPoints: [] as { label: string, y: number }[],
      },
    ],
  };

  lineChartOptions = {
    animationEnabled: true,
    title: {
      text: 'Gráfico de Linha [Lucro total mensal]',
    },
    data: [
      {
        type: 'line',
        dataPoints: [] as { label: string, y: number }[],
      },
    ],
  };

  vendasData: VendasDto[] = [];

  constructor(private vendasService: VendasControllerService) {}

  ngOnInit(): void {
    this.buscarDados();
  }

  buscarDados() {
    this.vendasService.listAll().subscribe(data => {
      this.vendasData = data;
      this.atualizarGraficoColunas();
      this.atualizarGraficoPizza();
      this.atualizarGraficoLinha();
    });
  }

  atualizarGraficoColunas() {
    const columnChartData = this.vendasData.map(venda => ({
      label: venda.nomeProduto || '',
      y: venda.qtdVenda || 0,
      valorTotal: venda.valorTotal || 0,
    }));
    this.columnChartOptions.data[0].dataPoints = columnChartData;
  }

  atualizarGraficoPizza() {
    const vendasPorProduto: { [produto: string]: number } = {};

    for (const venda of this.vendasData) {
      if (venda.nomeProduto) {
        if (vendasPorProduto[venda.nomeProduto]) {
          vendasPorProduto[venda.nomeProduto] += venda.qtdVenda || 0;
        } else {
          vendasPorProduto[venda.nomeProduto] = venda.qtdVenda || 0;
        }
      }
    }

    const pieChartData = Object.keys(vendasPorProduto).map(produto => ({
      label: produto,
      y: vendasPorProduto[produto],
    }));
    this.pieChartOptions.data[0].dataPoints = pieChartData;
  }

  atualizarGraficoLinha() {
    const lucroMensal: { [mes: string]: number } = {};

    for (const venda of this.vendasData) {
      if (venda.dataEncomenda && venda.qtdVenda && venda.valorTotal && venda.valorUnidade) {
        const dataEncomenda = new Date(venda.dataEncomenda);
        const mes = dataEncomenda.toLocaleString('default', { month: 'long' });
        const lucro = venda.qtdVenda * (venda.valorTotal - venda.valorUnidade);

        if (lucroMensal[mes]) {
          lucroMensal[mes] += lucro;
        } else {
          lucroMensal[mes] = lucro;
        }
      }
    }

    const lineChartData = Object.keys(lucroMensal).map(mes => ({
      label: mes,
      y: lucroMensal[mes],
    }));
    this.lineChartOptions.data[0].dataPoints = lineChartData;
  }
}
