import { exec } from "child_process"

function onSuccessLint() {
  console.log('✅ Linter found no problems')
}


function linter() {
  console.log('Running linter...')

  exec('npx tsc --noEmit', (error) => {
    if (!error) onSuccessLint()
  }).stdout.pipe(process.stdout)

}

function onSuccessTypeChecking() {
  console.log('✅ Types checked')

  linter()
}

function checkTypes() {
  console.log('Running type checker...')

  exec('npx tsc --noEmit', (error) => {
    if (!error) onSuccessTypeChecking()
  }).stdout.pipe(process.stdout)
}



checkTypes()





