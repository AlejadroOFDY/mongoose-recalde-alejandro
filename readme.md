Aprovechando que tenemos este trabajo para aprender a utilizar Mongoose y dado que
las colecciones corren a disposición meramente mía, me tomé el atrevimiento de
combinar el trabajo que estoy realizando en mi proyecto con este.

Por ello creé 5 colecciones:

Usuario: que tendrá un documento embebido (perfil).

Lista: dado que en mi proyecto el usuario deberá ser capaz de crear su propia.
lista personalizada.

Proyecto: este modelo solo tiene como fin cumplir con la consigna solicitada en el tp.

Planta: aquí estará la estructura que deberán seguir los documentos con la clasificación
de las plantas.

Insecto: de igual manera que con el modelo anteriormente nombrado, dispondrá de la clasificación
de los insectos.

Relaciones:

Uno a Uno
Usuario ---- Proyecto

Muchos a Muchos

Usuario ---- Lista

Lista --- Planta e Insecto
