var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JWT', code: `<pre style='color:#000000;background:#ffffff;'><span style='color:#800000; font-weight:bold; '>const</span> jwt <span style='color:#808030; '>=</span> require<span style='color:#808030; '>(</span><span style='color:#800000; '>'</span><span style='color:#0000e6; '>jsonwebtoken</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
<span style='color:#696969; '>// Retorna el JWT resultante de firmar { userId: 30 }</span>
<span style='color:#800000; font-weight:bold; '>const</span> token <span style='color:#808030; '>=</span> jwt<span style='color:#808030; '>.</span>sign<span style='color:#808030; '>(</span><span style='color:#800080; '>{</span> userId<span style='color:#800080; '>:</span> <span style='color:#008c00; '>30</span> <span style='color:#800080; '>}</span><span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>nuestraClaveSegura</span><span style='color:#800000; '>'</span><span style='color:#808030; '>)</span>
jwt<span style='color:#808030; '>.</span>verify<span style='color:#808030; '>(</span>token<span style='color:#808030; '>,</span> <span style='color:#800000; '>'</span><span style='color:#0000e6; '>nuestraClaveSegura</span><span style='color:#800000; '>'</span><span style='color:#808030; '>,</span> <span style='color:#800000; font-weight:bold; '>function</span><span style='color:#808030; '>(</span>error<span style='color:#808030; '>,</span> decoded<span style='color:#808030; '>)</span> <span style='color:#800080; '>{</span>
   <span style='color:#696969; '>// Si la clave es correcta, en decoded vendra nuestro mensaje original</span>
   <span style='color:#696969; '>// Pero, si la clave es erronea, decoded vendra undefined y en error vendra la causa del error</span>
<span style='color:#800080; '>}</span><span style='color:#808030; '>)</span>
</pre>` });
});

module.exports = router;
