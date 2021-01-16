## Responsive

```bash
@use "sass:map";
@import "~/styles/responsive/responsive.scss";


# example scss

.box{
    @include Responsive(map.get($screens,'XS')){
        # content css
        width:50%;
    }
}

# `$screens` in '~/style/responsive/__variables.scss'

```
