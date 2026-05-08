// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

function SumAvgLoop(): void {
  let i: number;
  let n: number = 5;
  let num: number;
  let sum: number = 0;
  let avg: number = 0;

  let numb: any = (document.getElementById("arr") as HTMLInputElement).value;
  //   for (let index = 0; index < n; index++) {
  //     num = Number(prompt("Enter Number : "));
  //     sum += num;
  //   }

  //   avg = sum / n;

  //   console.log(`Sum :: ${sum} ;; Avg :: ${avg}`);
  //   document.body.innerHTML += `Sum :: ${sum} ;; Avg :: ${avg}`;
  document.body.innerHTML += `<br/> Enter number in the text box is :: ${numb}`;
}

// SumAvgLoop();
