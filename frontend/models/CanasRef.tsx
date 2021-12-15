export default interface CanvasRef {
  getCanvas: () => String;
  loadCanvas: (data: String, immediate: Boolean) => void;
  resetCanvas: () => void;
}
