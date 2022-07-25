export interface DoughnutChartDatasetInterface {
    backgroundColor: string[],
    data: number[],
}

export interface DoughnutChartDataInterface {
    labels: string[],
    datasets: DoughnutChartDatasetInterface[]
}