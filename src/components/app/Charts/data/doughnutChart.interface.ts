export interface DoughnutChartDatasetInterface {
    backgroundColor: string[],
    data: (number|string)[],
}

export interface DoughnutChartDataInterface {
    labels: string[],
    datasets: DoughnutChartDatasetInterface[]
}