import { Component } from "@angular/core"

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
})
export class HeroComponent {
    title: string="SayaMan"
    skills: string[] = []
    age: number=46;
    get capitalizeName(): string{
        return this.title.toUpperCase()
    }
    
    hero(value:string="godWar"):void{
        this.title =value
    }
    setAge(value:number=46.5):void{
        this.age =value
    }
    showName():string{
        return `el super heroe ${this.title} tiene ${this.age}`;
    }
}