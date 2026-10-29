'use client';

import React, { useState } from 'react';
import { X, Calculator, RotateCcw } from 'lucide-react';

interface ScientificCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScientificCalculator: React.FC<ScientificCalculatorProps> = ({ isOpen, onClose }) => {
  const [display, setDisplay] = useState<string>('0');
  const [memory, setMemory] = useState<number>(0);
  const [isRad, setIsRad] = useState<boolean>(true); // Radians vs Degrees
  const [newNumber, setNewNumber] = useState<boolean>(true);

  if (!isOpen) return null;

  const handleDigit = (d: string) => {
    if (newNumber) {
      setDisplay(d === '.' ? '0.' : d);
      setNewNumber(false);
    } else {
      if (d === '.' && display.includes('.')) return;
      setDisplay(prev => prev + d);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (newNumber) return;
    if (display.length === 1) {
      setDisplay('0');
      setNewNumber(true);
    } else {
      setDisplay(prev => prev.slice(0, -1));
    }
  };

  const currentVal = parseFloat(display) || 0;

  const toAngle = (val: number) => (isRad ? val : (val * Math.PI) / 180);
  const fromAngle = (val: number) => (isRad ? val : (val * 180) / Math.PI);

  const applyUnary = (fn: (x: number) => number) => {
    try {
      const res = fn(currentVal);
      if (isNaN(res) || !isFinite(res)) {
        setDisplay('Error');
      } else {
        setDisplay(String(Math.round(res * 1e8) / 1e8));
      }
      setNewNumber(true);
    } catch {
      setDisplay('Error');
      setNewNumber(true);
    }
  };

  const factorial = (n: number): number => {
    if (n < 0 || Math.floor(n) !== n) return NaN;
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= Math.min(n, 100); i++) res *= i;
    return res;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-800/80 border-b border-slate-700">
          <div className="flex items-center gap-2.5">
            <Calculator className="w-5 h-5 text-emerald-400" />
            <h3 className="font-semibold text-sm tracking-wide text-slate-200">
              GATE Official Virtual Scientific Calculator
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsRad(!isRad)}
              className="text-xs px-2.5 py-1 rounded bg-slate-700 hover:bg-slate-600 font-mono text-emerald-300 transition-colors"
            >
              {isRad ? 'RAD' : 'DEG'}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Display Screen */}
        <div className="p-4 bg-slate-950 border-b border-slate-800">
          <div className="flex justify-between items-center text-xs text-slate-400 mb-1 font-mono">
            <span>Mode: {isRad ? 'Radian' : 'Degree'}</span>
            <span>Mem: {memory !== 0 ? memory : '0'}</span>
          </div>
          <div className="w-full text-right font-mono text-3xl font-bold tracking-wider overflow-x-auto text-emerald-400 py-1">
            {display}
          </div>
        </div>

        {/* Keypad */}
        <div className="p-4 grid grid-cols-5 gap-2 bg-slate-900 text-xs sm:text-sm font-medium">
          {/* Memory Row */}
          <button onClick={() => setMemory(0)} className="btn-calc-fn">MC</button>
          <button onClick={() => { setDisplay(String(memory)); setNewNumber(true); }} className="btn-calc-fn">MR</button>
          <button onClick={() => setMemory(currentVal)} className="btn-calc-fn">MS</button>
          <button onClick={() => setMemory(prev => prev + currentVal)} className="btn-calc-fn">M+</button>
          <button onClick={handleClear} className="btn-calc-fn text-red-400 font-bold">C</button>

          {/* Scientific Functions */}
          <button onClick={() => applyUnary(x => Math.sin(toAngle(x)))} className="btn-calc-fn">sin</button>
          <button onClick={() => applyUnary(x => Math.cos(toAngle(x)))} className="btn-calc-fn">cos</button>
          <button onClick={() => applyUnary(x => Math.tan(toAngle(x)))} className="btn-calc-fn">tan</button>
          <button onClick={() => applyUnary(x => Math.log10(x))} className="btn-calc-fn">log₁₀</button>
          <button onClick={() => applyUnary(x => Math.log(x))} className="btn-calc-fn">ln</button>

          <button onClick={() => applyUnary(x => fromAngle(Math.asin(x)))} className="btn-calc-fn">sin⁻¹</button>
          <button onClick={() => applyUnary(x => fromAngle(Math.acos(x)))} className="btn-calc-fn">cos⁻¹</button>
          <button onClick={() => applyUnary(x => fromAngle(Math.atan(x)))} className="btn-calc-fn">tan⁻¹</button>
          <button onClick={() => applyUnary(x => Math.pow(10, x))} className="btn-calc-fn">10ˣ</button>
          <button onClick={() => applyUnary(x => Math.exp(x))} className="btn-calc-fn">eˣ</button>

          <button onClick={() => applyUnary(x => Math.sqrt(x))} className="btn-calc-fn">√x</button>
          <button onClick={() => applyUnary(x => Math.cbrt(x))} className="btn-calc-fn">∛x</button>
          <button onClick={() => applyUnary(x => x * x)} className="btn-calc-fn">x²</button>
          <button onClick={() => applyUnary(x => x * x * x)} className="btn-calc-fn">x³</button>
          <button onClick={() => applyUnary(x => 1 / x)} className="btn-calc-fn">1/x</button>

          <button onClick={() => applyUnary(x => factorial(x))} className="btn-calc-fn">n!</button>
          <button onClick={() => { setDisplay(String(Math.PI)); setNewNumber(true); }} className="btn-calc-fn">π</button>
          <button onClick={() => { setDisplay(String(Math.E)); setNewNumber(true); }} className="btn-calc-fn">e</button>
          <button onClick={() => applyUnary(x => -x)} className="btn-calc-fn">±</button>
          <button onClick={handleBackspace} className="btn-calc-fn text-amber-400">⌫</button>

          {/* Numbers & Basic Ops */}
          <button onClick={() => handleDigit('7')} className="btn-calc-num">7</button>
          <button onClick={() => handleDigit('8')} className="btn-calc-num">8</button>
          <button onClick={() => handleDigit('9')} className="btn-calc-num">9</button>
          <button onClick={() => applyUnary(x => Math.abs(x))} className="btn-calc-fn">|x|</button>
          <button onClick={() => handleDigit('.')} className="btn-calc-num">.</button>

          <button onClick={() => handleDigit('4')} className="btn-calc-num">4</button>
          <button onClick={() => handleDigit('5')} className="btn-calc-num">5</button>
          <button onClick={() => handleDigit('6')} className="btn-calc-num">6</button>
          <button onClick={() => applyUnary(x => Math.floor(x))} className="btn-calc-fn">⌊x⌋</button>
          <button onClick={() => applyUnary(x => Math.ceil(x))} className="btn-calc-fn">⌈x⌉</button>

          <button onClick={() => handleDigit('1')} className="btn-calc-num">1</button>
          <button onClick={() => handleDigit('2')} className="btn-calc-num">2</button>
          <button onClick={() => handleDigit('3')} className="btn-calc-num">3</button>
          <button onClick={() => handleDigit('0')} className="btn-calc-num col-span-2">0</button>
        </div>

        {/* Footer info */}
        <div className="px-5 py-2.5 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between items-center">
          <span>Keyboard: Digits, Enter, Backspace supported</span>
          <button onClick={onClose} className="text-emerald-400 hover:underline">Close</button>
        </div>
      </div>
    </div>
  );
};

