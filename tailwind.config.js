module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px"
    },
    container:{
        center:true,
        padding:"1rem"
    },
    extend: {
      fontFamily:{
        BalsamiqSans:"'Balsamiq Sans' cursive",
        roboto:"'Roboto', sans-serif" 
      },
      colors:{
        "primary":"#166534"
      }
    },
  },
  variants:{
        extend:{
          display:["group-hover"],
          visibility:["group-hover"],
        
  },
  },
  plugins: [],
}
