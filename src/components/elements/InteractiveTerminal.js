import React, { useState, useEffect, useRef } from 'react';

const InteractiveTerminal = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        {
            type: 'output',
            content: <div className="text-slate-400 mb-2">Welcome to Franck's Terminal. Type <span className="text-accent-cyan">'help'</span> to see available commands.</div>
        }
    ]);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    const commands = {
        help: {
            desc: "List available commands",
            output: (
                <div className="space-y-1 text-slate-300">
                    <div>Available commands:</div>
                    <div className="grid grid-cols-[100px_1fr] gap-2">
                        <span className="text-accent-cyan">about</span> <span>Professional summary</span>
                        <span className="text-accent-cyan">skills</span> <span>Tech stack & tools</span>
                        <span className="text-accent-cyan">resume</span> <span>View/Download CV</span>
                        <span className="text-accent-cyan">contact</span> <span>Contact details</span>
                        <span className="text-accent-cyan">clear</span> <span>Clear terminal</span>
                    </div>
                </div>
            )
        },
        about: {
            desc: "Who am I?",
            output: "I am a Software Engineer based in Atlanta, specializing in event-driven architecture and scalable full stack systems."
        },
        skills: {
            desc: "My technical arsenal",
            output: (
                <div className="text-slate-300">
                    [ <span className="text-yellow-300">"Go"</span>, <span className="text-yellow-300">"TypeScript"</span>, <span className="text-yellow-300">"AWS Lambda"</span>, <span className="text-yellow-300">"Kinesis"</span>, <span className="text-yellow-300">"Terraform"</span> ]
                </div>
            )
        },
        resume: {
            desc: "View my CV",
            output: (
                <div className="text-green-400">
                    Opening resume.pdf... <span className="text-slate-500">(Check your pop-up blocker if it doesn't appear)</span>
                </div>
            ),
            action: () => window.open('/resume.pdf', '_blank')
        },
        contact: {
            desc: "How to reach me",
            output: (
                <div>
                    <div>Email: <a href="mailto:kabasele467@gmail.com" className="text-accent-cyan underline">kabasele467@gmail.com</a></div>
                    <div>LinkedIn: <a href="https://linkedin.com/in/franck-kabasele" target="_blank" rel="noreferrer" className="text-accent-cyan underline">linkedin.com/in/franck-kabasele</a></div>
                </div>
            )
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();

            if (cmd === 'clear') {
                setHistory([]);
                setInput('');
                return;
            }

            const newHistory = [...history, { type: 'command', content: cmd }];

            if (commands[cmd]) {
                newHistory.push({ type: 'output', content: commands[cmd].output });
                // Trigger external action if defined (like opening PDF)
                if (commands[cmd].action) commands[cmd].action();
            } else if (cmd !== '') {
                newHistory.push({
                    type: 'error',
                    content: `Command not found: ${cmd}. Type 'help' for list.`
                });
            }

            setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <div
            ref={containerRef}
            className="h-full w-full p-6 font-mono text-sm sm:text-base leading-loose text-slate-300 overflow-y-auto cursor-text custom-scrollbar"
            onClick={handleFocus}
        >
            <div className="mb-6 border-b border-slate-700/50 pb-4">
                <div className="flex gap-4">
                    <div className="text-accent-purple hidden sm:block select-none">
                        <pre className="text-[10px] leading-[10px]">
                            {`
   _    _ 
  | |  | |
  | |__| |
  |  __  |
  | |  | |
  |_|  |_|
`}
                        </pre>
                    </div>
                    <div className="space-y-1">
                        <div><span className="text-accent-cyan font-bold">User:</span> Franck Kabasele</div>
                        <div><span className="text-accent-cyan font-bold">Role:</span> Senior Software Engineer</div>
                        <div><span className="text-accent-cyan font-bold">Stack:</span> Go, Node, AWS</div>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                {history.map((line, i) => (
                    <div key={i}>
                        {line.type === 'command' ? (
                            <div className="flex items-center">
                                <span className="text-accent-cyan mr-2">➜</span>
                                <span className="text-blue-400 mr-2">~</span>
                                <span className="text-white">{line.content}</span>
                            </div>
                        ) : (
                            <div className={line.type === 'error' ? 'text-red-400' : ''}>{line.content}</div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex items-center mt-2">
                <span className="text-accent-cyan mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0"
                    autoFocus
                    autoComplete="off"
                />
            </div>
        </div>
    );
};

export default InteractiveTerminal;