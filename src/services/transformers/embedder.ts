import { pipeline, env } from '@xenova/transformers'

// Force everything to run in the main thread and avoid any workers
env.backends.onnx.wasm.proxy = false
env.backends.onnx.wasm.numThreads = 1

// Optional if you ship assets locally:
env.localModelPath = chrome.runtime.getURL('models')
env.allowRemoteModels = false
env.backends.onnx.wasm.wasmPaths = chrome.runtime.getURL('wasm/')

const pipePromise = pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2')

export async function getEmbeddingFromText(text: string): Promise<number[]> {
  const pipe = await pipePromise
  const output = await pipe(text, {
    pooling: 'mean',
    normalize: true
  })

  return Array.from(output.data)
}
