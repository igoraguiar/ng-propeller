import { Directive, HostListener, HostBinding } from '@angular/core';

declare var $: any

@Directive({
    selector: '.pmd-xtra-shake-effect'
})
export class PmdXtraShakeEffectDirective {

    @HostBinding('style.position') 
    position = 'relative'

    constructor() { }

    @HostListener('mousedown', ['$event'])
    @HostListener('touchstart', ['$event'])
    handleMouseDown(e) {
        this.runEffect(e)
    }

    runEffect(e) {
        var jEl = $(e.target);
        const arr = [-10, 20, -20, 20, -10]
        const exec = () => {
            if(arr.length > 0) {
                const val = arr.pop()
                const offset = `${val < 0 ? '-=' : '+='}${Math.abs(val)}px`
                jEl.animate({
                    left: offset
                }, 50, 'swing', exec);
            }
        }
        exec()
        

        // arr.forEach((val)=> {
        //     const offset = `${val < 0 ? '-=' : '+='}${Math.abs(val)}px`
        //     jEl = jEl.animate({
        //         left: offset
        //     }, 50);
        // })
    }
}
