import { Component } from '@angular/core';
@Component({

selector:'prop',
/*template:`<h2 [align]=center> This is some text</h2>
<table [border]=5>
<tr>
<th>month</th>
<th>collection</th>
<th>source</th>
</tr>
<tr>
<td>may</td>
<td>100000</td>
<td>ABC</td>
</tr>
<tr>
<td>june</td>
<td>100000</td>
<td>ABC</td>
</tr>
<tr>
<td>july</td>
<td>100000</td>
<td>ABC</td>
</tr>
</table>`
    template:`<h1 [style.color]="active?'blue':'red'">
        heading with style binding</h1>`
    template:`<button (click)="onmyclick($event)">click</button>
        `
    template:`
        <div (click)="ondivclk()">
        <button (click)="onmyclick($event)">click</button>
        </div>
        `*/
    template:`
    
        /*Enter number <input #a name=a/>
        <br>
        <button (click)="onmyclick(a.value)">Increment</button>
        <button (click)="onmyclick1(a.value)">Decrement</button>
        */
        <button (click)="onmyclick1(a.value)">button1</button>
        <button (click)="onmyclick1(a.value)">button2</button>
        <button (click)="onmyclick1(a.value)">button3</button>
        <button (click)="onmyclick1(a.value)">button4</button>
        <button (click)="onmyclick1(a.value)">button5</button>
        `
        
        
})

export class prop{
    /*ondivclk(){
        console.log("div clicked");
        }
onmyclick($event){
    $event.stopPropagation();//to stop propagation event
    console.log("button clicked",$event);
}
    onmyclick(a)
    {
        a++;   
console.log(a);
    }
       onmyclick1(a){
        a--;
        console.log(a);
    }*/
    
    
    
    
    
    
    
    
    
}