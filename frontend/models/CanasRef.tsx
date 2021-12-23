export default interface CanvasRef {
  getCanvas: () => string;
  loadCanvas: (data: string, immediate: boolean) => void;
  plainReset: () => void;
  plainUndo: () => void;
}
