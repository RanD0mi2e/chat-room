import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface RoundMatrixProps {
  width: number;
  height: number;
  gap: number;
  totalLayers: number;
}

export function RoundMatrix({
  width,
  height,
  totalLayers,
  gap,
}: RoundMatrixProps) {
  const svgRef = useRef();

  useEffect(() => {
    const centerX = width / 2;
    const centerY = height / 2;
    const minRadius = 10;
    const circlesData = [];

    for (let layer = 0; layer < totalLayers; layer++) {
      const circlesInLayers = layer === 0 ? 1 : layer * 6;
      const radius = layer * gap;
      const angleStep = (2 * Math.PI) / circlesInLayers;

      for (let i = 0; i < circlesInLayers; i++) {
        const angle = i * angleStep;
        const cx = centerX + Math.cos(angle) * radius;
        const cy = centerY + Math.sin(angle) * radius;
        const sizeFactor = 1 - radius / (totalLayers * gap);
        circlesData.push({ cx, cy, r: minRadius * sizeFactor });
      }
    }

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // 绘制圆形点阵
    const circles = svg
      .selectAll("circle")
      .data(circlesData)
      .join("circle")
      .attr("cx", (d) => d.cx)
      .attr("cy", (d) => d.cy)
      .attr("r", (d) => d.r)
      .attr("fill", "black");

    // 更新圆的大小基于拖拽位置
    const updateCircles = (mouseX: number, mouseY: number) => {
      circles
        .transition()
        .duration(200) // 设置动画时长
        .attr("r", (d) => {
          const distance = Math.sqrt(
            Math.pow(d.cx - mouseX, 2) + Math.pow(d.cy - mouseY, 2)
          );
          const maxRadius = 20; // 最大圆的半径
          return Math.max(minRadius, maxRadius - distance / 10); // 距离越近，圆越大
        });
    };

    // 拖拽事件
    const drag = d3.drag().on("drag", (event) => {
      const [mouseX, mouseY] = d3.pointer(event);
      updateCircles(mouseX, mouseY);
    });

    svg.call(drag);
  }, [width, height, totalLayers, gap]);

  return <svg ref={svgRef}></svg>;
}
