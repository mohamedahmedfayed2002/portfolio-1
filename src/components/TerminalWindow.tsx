import { useEffect, useState } from 'react';

type Line = { prompt?: string; text: string; output?: string[]; delay?: number };

const script: Line[] = [
  { prompt: '$', text: 'whoami', output: ['mohamed'] },
  { prompt: '$', text: 'kubectl get pods -n prod', output: ['NAME            READY   STATUS    RESTARTS', 'api-server-01   1/1     Running   0', 'worker-02       1/1     Running   0'] },
  { prompt: '$', text: 'docker ps --filter "status=running"', output: ['CONTAINER ID   IMAGE        STATUS', 'a3f1c8e9d2     nginx:alpine Up 3 hours', 'b9e2f4a1c7     postgres:16  Up 3 hours'] },
  { prompt: '$', text: 'terraform apply -auto-approve', output: ['Apply complete! Resources: 12 added, 0 changed, 0 destroyed.'] },
  { prompt: '$', text: 'echo "Infrastructure as Code: Done"', output: ['Infrastructure as Code: Done'] },
];

export default function TerminalWindow() {
  const [lines, setLines] = useState<{ prompt?: string; text: string; output?: string[] }[]>([]);
  const [typed, setTyped] = useState('');
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (step >= script.length) {
      setDone(true);
      const reset = setTimeout(() => {
        setLines([]);
        setStep(0);
        setTyped('');
        setTyping(true);
        setDone(false);
      }, 6000);
      return () => clearTimeout(reset);
    }

    const current = script[step];

    if (typing) {
      if (typed.length < current.text.length) {
        const t = setTimeout(() => setTyped(current.text.slice(0, typed.length + 1)), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setLines((l) => [...l, { prompt: current.prompt, text: current.text, output: current.output }]);
        setTyped('');
        setTyping(false);
      }, 400);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setStep((s) => s + 1);
        setTyping(true);
      }, 800);
      return () => clearTimeout(t);
    }
  }, [typed, step, typing, done]);

  return (
    <div className="w-full max-w-md rounded-2xl glass overflow-hidden shadow-glow-lg border border-white/[0.08]">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-red-400/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
        <span className="w-3 h-3 rounded-full bg-green-400/80" />
        <span className="ml-2 font-mono text-xs text-ink-muted">mohamed@devops: ~</span>
      </div>

      {/* body */}
      <div className="p-4 font-mono text-[13px] leading-relaxed h-72 overflow-hidden">
        {lines.map((l, i) => (
          <div key={i} className="mb-2">
            <div>
              {l.prompt && <span className="text-neon">{l.prompt} </span>}
              <span className="text-ink">{l.text}</span>
            </div>
            {l.output?.map((o, j) => (
              <div key={j} className="text-ink-muted pl-3">{o}</div>
            ))}
          </div>
        ))}
        {!done && (
          <div>
            {script[step]?.prompt && <span className="text-neon">{script[step].prompt} </span>}
            <span className="text-ink">{typed}</span>
            <span className="inline-block w-2 h-4 bg-neon ml-0.5 align-middle animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}
