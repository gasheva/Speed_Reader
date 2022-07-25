export interface LineChartDatasetInterface {
    label: string,
    backgroundColor: string,
    data: number[],
}

export interface LineChartDataInterface {
    labels: string[],
    datasets: LineChartDatasetInterface[],
}