import { execSync } from 'child_process'
import { writeFileSync } from 'fs'

execSync('npx vitepress build docs', { stdio: 'inherit' })

writeFileSync('docs/.vitepress/dist/.nojekyll', '')

execSync('git init', { cwd: 'docs/.vitepress/dist' })
execSync('git add -A', { cwd: 'docs/.vitepress/dist' })

execSync('git commit -m "deploy docs"', { cwd: 'docs/.vitepress/dist' })
execSync('git branch -M gh-pages', { cwd: 'docs/.vitepress/dist' })

try{
execSync('git remote add origin https://github.com/DanKaufmanDev/IconForge-Frontend.git', { cwd: 'docs/.vitepress/dist' })
} catch (e){
    console.log("Origin Already Exists")
}
execSync('git push -f origin gh-pages', { cwd: 'docs/.vitepress/dist' })

console.log('Deployed!')
