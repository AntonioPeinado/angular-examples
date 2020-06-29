import { NgModule, Component, Injectable } from '@angular/core';

@Injectable()
export class FooService { }

@Injectable()
export class BarService { }

@Component({})
export class AComponent {
  constructor(private foo: FooService, private bar: BarService) { }
}

@Component({
  providers: [FooService]
})
export class BComponent {
  constructor(private foo: FooService, private bar: BarService) { }
}

@NgModule({
  declarations: [BComponent],
  exports: [BComponent],
  providers: [BarService]
})
export class FeatureModule { }

@NgModule({
  declarations: [AComponent],
  imports: [FeatureModule],
  providers: [FooService, BarService],
  bootstrap: [AComponent]
})
export class AppModule { }

// 1. Cuántos inyectores se han creado.
// 2. Indique la jerarquía de los inyectores.
// 3. Después de instanciar los componentes A y B. Cuántas instancias hay de cada servicio?
// 4. Y si FooService no estuviese en los providers de B?
// 5. Describa el proceso de la creación de cada uno de los componentes.
