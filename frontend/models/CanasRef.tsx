export default interface CanvasRef {
  getCanvas: () => string;
  loadCanvas: (data: string, immediate: boolean) => void;
  resetCanvas: () => void;
}
