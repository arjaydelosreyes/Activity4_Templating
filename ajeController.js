const aje = {
  
    about:(req, res) => {
        res.render('vabout');
    
},
    blog:(req, res) => {
        res.render('vblog');
    
},
    contacts:(req, res) => {
        res.render('vcontacts');
    
},
    index:(req, res) => {
        res.render('vindex');
    
},
    service:(req, res) => {
        res.render('vservice');
    },

    testimonial:(req, res) => {
        res.render('vtestimonial');
    }
};

module.exports = aje;