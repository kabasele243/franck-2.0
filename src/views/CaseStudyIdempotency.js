import React from 'react';
import { motion } from 'framer-motion';

const CaseStudyIdempotency = () => {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden text-slate-300">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="max-w-4xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent font-mono text-sm tracking-wider uppercase border border-accent/30 px-3 py-1 rounded mb-4 inline-block">
                            Technical Documentation
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                            Idempotent API Engine
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            A fault-tolerant middleware ensuring exactly-once processing for payment APIs during network failures.
                        </p>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Executive Summary */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Executive Summary</h2>
                        <p className="mb-4 leading-relaxed">
                            The Idempotent API is a <strong className="text-accent bg-accent/10 px-1 rounded">production-grade Node.js/TypeScript application</strong> that demonstrates how to build <strong className="text-accent bg-accent/10 px-1 rounded">resilient, fault-tolerant</strong> payment and order processing systems. It solves the critical problem of <strong className="text-accent bg-accent/10 px-1 rounded">duplicate request handling</strong> in <strong className="text-accent bg-accent/10 px-1 rounded">distributed systems</strong>, ensuring that network failures and retries don't result in <strong className="text-accent bg-accent/10 px-1 rounded">duplicate charges or orders</strong>.
                        </p>
                        <div className="bg-accent-teal/10 border-l-4 border-accent-teal p-4 rounded-r">
                            <p className="text-white font-semibold">Key Achievement</p>
                            <p className="text-slate-300">Safely handle retries in payment operations without double-charging customers or creating duplicate orders.</p>
                        </div>
                    </section>

                    {/* Problem Statement */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Problem Statement</h2>
                        <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                        <p className="mb-4">
                            In distributed systems, network failures and timeouts are inevitable. When a client sends a payment request and doesn't receive a response (due to network timeout), they face a critical dilemma:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                            <li><strong>Don't retry:</strong> Risk losing a legitimate transaction</li>
                            <li><strong>Retry blindly:</strong> Risk charging the customer twice</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-4">Real-World Scenario</h3>
                        <div className="bg-bg-secondary p-6 rounded-lg font-mono text-sm mb-6 border border-slate-700 overflow-x-auto">
                            <pre>{`Client → [POST /orders amount=100] → Server
                                       ↓
                                   Process Payment ($100 charged)
                                       ↓
                                   Create Order in DB
                                       ↓
Client ← [TIMEOUT - No Response Received]`}</pre>
                        </div>

                        <p className="mb-4 font-semibold text-white">What should the client do?</p>
                        <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                            <li>If they retry: Customer might be charged $200</li>
                            <li>If they don't: Order might be lost</li>
                        </ul>
                    </section>

                    {/* Solution Overview */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Solution Overview</h2>
                        <p className="mb-6">
                            The solution implements <strong className="text-accent bg-accent/10 px-1 rounded">idempotency</strong> - a mathematical property where an operation produces the same result no matter how many times it's executed.
                        </p>
                        <p className="mb-6">
                            Core Concept: Clients include a unique <code>X-Idempotency-Key</code> header with each request. The server guarantees:
                        </p>
                        <ul className="list-disc list-inside mb-6 space-y-2 ml-4">
                            <li>First request with a key processes normally</li>
                            <li>Subsequent requests with the same key return the cached result</li>
                            <li>No side effects (charges, database writes) occur on retries</li>
                        </ul>

                        <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
                        <div className="space-y-6">
                            <div className="bg-bg-secondary p-6 rounded-lg border border-slate-700">
                                <h4 className="text-accent font-bold mb-2">Request 1 (Key: abc-123)</h4>
                                <div className="font-mono text-sm opacity-90">
                                    Client → POST /orders + Key: abc-123 → Server<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                    &nbsp;&nbsp;Check DynamoDB: Key not found<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                    &nbsp;&nbsp;Lock key (IN_PROGRESS)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                    &nbsp;&nbsp;Process payment → Create order<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                    &nbsp;&nbsp;Store result in DynamoDB (COMPLETED)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                    Client ← 201 Created {'{orderId: "xyz"}'}
                                </div>
                            </div>

                            <div className="bg-bg-secondary p-6 rounded-lg border border-slate-700">
                                <h4 className="text-accent font-bold mb-2">Request 2 (Same Key: abc-123) - RETRY</h4>
                                <div className="font-mono text-sm opacity-90">
                                    Client → POST /orders + Key: abc-123 → Server<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                    &nbsp;&nbsp;Check DynamoDB: Key found (COMPLETED)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                    &nbsp;&nbsp;Return cached result (NO processing)<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓<br />
                                    Client ← 201 Created {'{orderId: "xyz"}'} (SAME RESPONSE)
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 italic text-slate-400">Result: Payment charged ONCE, order created ONCE, but client receives confirmation TWICE</p>
                    </section>

                    {/* Architecture */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Architecture</h2>

                        <h3 className="text-xl font-bold text-white mb-4">High-Level Architecture</h3>
                        <div className="bg-bg-secondary p-6 rounded-lg font-mono text-xs sm:text-sm mb-8 border border-slate-700 overflow-x-auto leading-relaxed whitespace-pre">
                            {`┌─────────────┐
│   Client    │
│ (Mobile/Web)│
└──────┬──────┘
       │ HTTP Request + Idempotency-Key
       ▼
┌─────────────────────────────────────────────────┐
│              Express Middleware Stack           │
├─────────────────────────────────────────────────┤
│ 1. Helmet (Security Headers)                    │
│ 2. Correlation ID (Request Tracking)            │
│ 3. Body Parser (JSON, 10kb limit)               │
│ 4. Rate Limiter (100 req/15min per IP)          │
│ 5. Health Checks (/health, /ready)              │
│ 6. Idempotency Middleware ★                     │
│ 7. Route Handlers                               │
│ 8. Error Handler                                │
└──────┬──────────────────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────────────────┐
│           Orders Controller & Service           │
├─────────────────────────────────────────────────┤
│  • Input validation (Zod schemas)               │
│  • Business logic orchestration                 │
│  • Circuit breaker wrapping                     │
└──────┬──────────────────────────────────────────┘
       │
       ├─────────────────┬──────────────────┐
       ▼                 ▼                  ▼
┌──────────────┐  ┌─────────────┐  ┌──────────────┐
│  PostgreSQL  │  │  DynamoDB   │  │Payment Service│
│  (Orders DB) │  │(Idempotency)│  │ (External API)│
└──────────────┘  └─────────────┘  └──────────────┘`}
                        </div>

                        {/* Component Breakdown - Simplified for view */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">Express Application Layer</h4>
                                <p className="text-sm mb-4">Handles application setup, middleware registration, and secure route mounting.</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-2">Infrastructure Layer</h4>
                                <p className="text-sm mb-4">Managed via structured logging (Pino), Prisma ORM for Postgres, and DynamoDB for atomic locks.</p>
                            </div>
                        </div>
                    </section>

                    {/* Core Features */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Core Features</h2>

                        {/* Idempotency Middleware */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-accent mb-4">1. Idempotency Middleware ★</h3>
                            <p className="mb-4">
                                The heart of the system. It uses a <strong className="text-accent bg-accent/10 px-1 rounded">state machine model</strong> backed by detailed <strong className="text-accent bg-accent/10 px-1 rounded">DynamoDB conditional writes</strong> to manage request states.
                            </p>

                            <div className="bg-bg-secondary p-6 rounded-lg border border-slate-700 mb-6">
                                <h4 className="text-white font-bold mb-4">State Machine Flow</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                    <div className="p-4 bg-slate-800 rounded border border-slate-700">
                                        <div className="text-white font-bold">1. Key Not Found</div>
                                        <div className="text-xs mt-2">Check DynamoDB</div>
                                    </div>
                                    <div className="hidden md:block self-center">→</div>
                                    <div className="p-4 bg-slate-800 rounded border border-slate-700">
                                        <div className="text-accent font-bold">2. Create Lock</div>
                                        <div className="text-xs mt-2">State: IN_PROGRESS</div>
                                    </div>
                                    <div className="hidden md:block self-center">→</div>
                                    <div className="p-4 bg-slate-800 rounded border border-slate-700">
                                        <div className="text-accent-teal font-bold">3. Store Result</div>
                                        <div className="text-xs mt-2">State: COMPLETED</div>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-white font-bold mb-2">Race Condition Handling</h4>
                            <p className="mb-4">
                                Using DynamoDB's <strong className="text-accent bg-accent/10 px-1 rounded">atomic <code>ConditionExpression</code></strong>, we ensure that only one request can acquire the lock for a given key, even with millisecond-level concurrency.
                            </p>
                            <pre className="bg-bg-secondary p-4 rounded text-xs text-slate-300 overflow-x-auto">
                                {`await dynamodb.put({
  Item: { idempotencyKey, status: 'IN_PROGRESS' },
  ConditionExpression: 'attribute_not_exists(idempotencyKey)'
});`}
                            </pre>
                        </div>

                        {/* Circuit Breaker */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-accent mb-4">2. Circuit Breaker Pattern</h3>
                            <p className="mb-4">
                                Prevents cascading failures when external services (like Payment Gateways) are down. Implemented using <strong className="text-accent bg-accent/10 px-1 rounded"><code>Opossum</code></strong>.
                            </p>
                            <ul className="list-disc list-inside mb-4 ml-4">
                                <li><strong>CLOSED:</strong> Normal operation.</li>
                                <li><strong>OPEN:</strong> Failing &gt; 50%. Requests fail fast without calling external service.</li>
                                <li><strong>HALF-OPEN:</strong> Testing recovery after timeout.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Technology Stack</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Node.js 20', 'TypeScript 5.9', 'Express 5.2', 'Prisma ORM', 'PostgreSQL 16', 'DynamoDB', 'Zod', 'Docker'].map((tech) => (
                                <div key={tech} className="bg-slate-800/50 border border-slate-700 p-3 rounded text-center text-sm font-mono text-accent-teal">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Security */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Security Measures</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <li className="flex items-start">
                                <span className="text-accent-teal mr-2">✓</span>
                                <div>
                                    <strong className="text-accent bg-accent/10 px-1 rounded">Helmet Headers:</strong> Protection against XSS, sniffing, clickjacking.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent-teal mr-2">✓</span>
                                <div>
                                    <strong className="text-accent bg-accent/10 px-1 rounded">Rate Limiting:</strong> 100 requests / 15min per IP.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent-teal mr-2">✓</span>
                                <div>
                                    <strong className="text-accent bg-accent/10 px-1 rounded">Zod Validation:</strong> Strict schema validation for all inputs.
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-accent-teal mr-2">✓</span>
                                <div>
                                    <strong className="text-accent bg-accent/10 px-1 rounded">Docker Security:</strong> Non-root user execution, minimal alpine images.
                                </div>
                            </li>
                        </ul>
                    </section>

                    {/* Performance */}
                    <section>
                        <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-700 pb-2">Performance</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-white">Database Optimization</h3>
                                <p className="text-sm"><strong className="text-accent bg-accent/10 px-1 rounded">Prisma connection pooling</strong> reuses DB connections to reduce overhead (~1ms vs ~100ms).</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">DynamoDB Efficiency</h3>
                                <p className="text-sm"><strong className="text-accent bg-accent/10 px-1 rounded">Single-digit millisecond latency</strong> for lock checks (1-5ms) vs relational DB transactions.</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </section>
    );
}

export default CaseStudyIdempotency;
