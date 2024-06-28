

    const QuoteGeneration=()=>{
        const a = [("Be yourself everyone else is already taken."),("So many books, so little time."), ("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            "A room without books is like a body without a soul.")];
            const b = Math.floor(Math.random() * a.length);
            return a[b];
            
    }

    export default QuoteGeneration;