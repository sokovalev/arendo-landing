interface Window {
  ym: (id: number, action: string, goal: string) => void;
  _tmr: {
    push: (data: { type: string; id: number; goal: string }) => void;
  };
}
