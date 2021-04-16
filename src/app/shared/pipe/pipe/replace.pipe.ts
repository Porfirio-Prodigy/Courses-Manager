import { Pipe, PipeTransform } from "@angular/core";

// Criando um pipe personalizado
@Pipe ({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, value2replace: string) {
        return value.replace(char, value2replace);
    }

}