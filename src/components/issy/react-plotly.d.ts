declare module 'react-plotly.js' {
  import Plotly from 'plotly.js';
  import * as React from 'react';

  export interface PlotParams {
    data: Plotly.Data[];
    layout?: Partial<Plotly.Layout>;
    config?: Partial<Plotly.Config>;
    frames?: Plotly.Frame[];
    useResizeHandler?: boolean;
    style?: React.CSSProperties;
    className?: string;
    onInitialized?: (figure: Readonly<Plotly.Figure>, graphDiv: HTMLDivElement) => void;
    onUpdate?: (figure: Readonly<Plotly.Figure>, graphDiv: HTMLDivElement) => void;
  }

  const Plot: React.FC<PlotParams>;

  export default Plot;
}
