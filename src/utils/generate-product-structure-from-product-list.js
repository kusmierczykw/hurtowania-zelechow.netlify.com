`
denaturat 
gaz do zapalniczek
gaz w butli do kuchni
latarki
płaszcze przeciwdeszczowe
woda destylowana 
wycieraczki gumowe
żarówki E14 i E27
żarówki energooszczędne
`
    .split('\n')
    .filter((value) => !!value)
    .reduce((products, current, index, array) => {
        const length = array.length;
        const [first, second] = products;

        if (index < Math.ceil((length / 2))) {
            first.push(current);
        } else {
            second.push(current);
        }

        return products;
    }, [[], []])
    .map((entry) => entry.map((element) => ({id: '', title: element})))
    .map((items) => ({id: '', items}))
