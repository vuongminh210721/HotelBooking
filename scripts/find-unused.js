// const fs = require('fs');
// const path = require('path');

// const workspaceRoot = path.resolve(__dirname, '..');
// const clientRoot = path.join(workspaceRoot, 'client');
// const exts = ['.tsx', '.ts', '.jsx', '.js'];

// function walk(dir) {
//   let results = [];
//   const list = fs.readdirSync(dir, { withFileTypes: true });
//   for (const ent of list) {
//     const full = path.join(dir, ent.name);
//     if (ent.isDirectory()) {
//       results = results.concat(walk(full));
//     } else if (ent.isFile() && exts.includes(path.extname(ent.name))) {
//       results.push(full);
//     }
//   }
//   return results;
// }

// function resolveImport(fromFile, importPath) {
//   // handle aliases
//   if (importPath.startsWith('@/')) {
//     const rel = importPath.replace(/^@\//, '');
//     const candidate = path.join(clientRoot, rel);
//     // try with extensions or index
//     for (const e of exts) {
//       if (fs.existsSync(candidate + e)) return path.normalize(candidate + e);
//     }
//     for (const e of exts) {
//       if (fs.existsSync(path.join(candidate, 'index' + e))) return path.normalize(path.join(candidate, 'index' + e));
//     }
//     return null;
//   }

//   // relative
//   if (importPath.startsWith('.')) {
//     const candidate = path.resolve(path.dirname(fromFile), importPath);
//     for (const e of exts) {
//       if (fs.existsSync(candidate + e)) return path.normalize(candidate + e);
//     }
//     for (const e of exts) {
//       if (fs.existsSync(path.join(candidate, 'index' + e))) return path.normalize(path.join(candidate, 'index' + e));
//     }
//     return null;
//   }

//   // other packages - ignore
//   return null;
// }

// function main() {
//   const files = walk(clientRoot);
//   const graph = {}; // file -> {out: Set, in: Set}
//   for (const f of files) {
//     graph[f] = { out: new Set(), in: new Set() };
//   }

//   const importRegex = /import\s+(?:[^;]+?)\s+from\s+['\"](.*?)['\"]/g;
//   const importRegex2 = /import\(['\"](.*?)['\"]\)/g; // dynamic

//   for (const f of files) {
//     const content = fs.readFileSync(f, 'utf8');
//     let m;
//     while ((m = importRegex.exec(content))) {
//       const imp = m[1];
//       const resolved = resolveImport(f, imp);
//       if (resolved && graph[resolved]) {
//         graph[f].out.add(resolved);
//         graph[resolved].in.add(f);
//       }
//     }
//     while ((m = importRegex2.exec(content))) {
//       const imp = m[1];
//       const resolved = resolveImport(f, imp);
//       if (resolved && graph[resolved]) {
//         graph[f].out.add(resolved);
//         graph[resolved].in.add(f);
//       }
//     }
//   }

//   // list candidates: files with in.size === 0, but keep entry points
//   const entryPoints = new Set([
//     path.join(clientRoot, 'App.tsx'),
//     path.join(clientRoot, 'pages', 'Index.tsx'),
//   ].map(p=>path.normalize(p)));

//   const candidates = [];
//   for (const [file, data] of Object.entries(graph)) {
//     if (data.in.size === 0 && !entryPoints.has(path.normalize(file))) {
//       candidates.push(path.relative(workspaceRoot, file));
//     }
//   }

//   // sort
//   candidates.sort();

//   console.log('Found', files.length, '.tsx/ts/js/jsx files under client/');
//   console.log('Candidate unused files (no incoming imports within `client/`):');
//   for (const c of candidates) console.log('- ', c);
// }

// main();
