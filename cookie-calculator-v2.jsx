import React, { useState, useMemo, useEffect } from 'react';
import { Download, Plus, Trash2, Calculator, ShoppingCart, DollarSign, Languages, ChefHat, Moon, Sun, Scale, Image } from 'lucide-react';

// TODAS AS 37 RECEITAS - Importadas da planilha
const RECIPES_DATA = [{"num":1,"nome":{"pt":"LEMON NUTS","en":"LEMON NUTS","es":"LEMON NUTS"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":242},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":92},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":114},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":80},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":412},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":285},{"pt":"OLEAGINOSAS (Nozes, Castanhas. Sua preferência)","en":"OILSEEDS (Walnuts, Chestnuts. Your preference)","es":"SEMILLAS OLEAGINOSAS (Nueces, Castañas. A tu gusto)","quantidade_base":240},{"pt":"LIMÃO TAHITI (Só as Raspas)","en":"LEMON (ZESTS ONLY)","es":"LIMON (Zests)","quantidade_base":20}]},{"num":2,"nome":{"pt":"DARK CHOCOLATE COOKIE","en":"DARK CHOCOLATE COOKIE","es":"DARK CHOCOLATE COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":235},{"pt":"MANTEIGA CLARIFICADA","en":"UNSALTED BUTTER","es":"MANTEQUILLA CLARIFICADA","quantidade_base":30},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":85},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":130},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":105},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":405},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CACAU EM PÓ","en":"COCOA POWDER","es":"CACAO EN POLVO","quantidade_base":30},{"pt":"CACAU EM PÓ BLACK","en":"BLACK COCOA POWDER","es":"CACAO NEGRO EN POLVO","quantidade_base":15},{"pt":"CHOCOLATE MEIO AMARGO","en":"Semisweet Chocolate","es":"CHOCOLATE SEMIDULCE","quantidade_base":242},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":208}]},{"num":3,"nome":{"pt":"CHOCOLATE CHIP COOKIE","en":"CHOCOLATE CHIP COOKIE","es":"CHOCOLATE CHIP COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":260},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":75},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":410},{"pt":"FERMENTO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"GOTAS DE CHOCOLATE","en":"CHOCOLATE CHIPS","es":"CHISPAS DE CHOCOLATE","quantidade_base":530},{"pt":"FLOR DE SAL","en":"SEA SALT FLAKES","es":"FLOR DE SAL","quantidade_base":5}]},{"num":4,"nome":{"pt":"SPICE COOKIES","en":"SPICE COOKIES","es":"SPICE COOKIES"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":262},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":72},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":118},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":390},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CANELA EM PÓ","en":"CINNAMON POWDER","es":"CANELA EN POLVO","quantidade_base":5},{"pt":"CRAVO EM PÓ","en":"CLOVE POWDER","es":"CLAVO EN POLVO","quantidade_base":2},{"pt":"NOZM MOSCADA","en":"NUTMEG","es":"NUEZ MOSCADA","quantidade_base":2},{"pt":"GENGIBRE EM PÓ","en":"GINGER POWDER","es":"JENGIBRE EN POLVO","quantidade_base":3},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":398},{"pt":"FLOR DE SAL","en":"SEA SALT FLAKES","es":"FLOR DE SAL","quantidade_base":5}]},{"num":5,"nome":{"pt":"DARK GOLD CARAMEL","en":"DARK GOLD CARAMEL","es":"DARK GOLD CARAMEL"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":260},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":72},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":108},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":402},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":390},{"pt":"GOTAS DE CARAMELO","en":"CARAMEL CHIPS","es":"CHIPS DE CARAMELO","quantidade_base":120},{"pt":"FLOR DE SAL","en":"SEA SALT FLAKES","es":"FLOR DE SAL","quantidade_base":5}]},{"num":6,"nome":{"pt":"SMORE COOKIE","en":"SMORE COOKIE","es":"SMORE COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":262},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":106},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":390},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"MARSHMALLOW","en":"MARSHMALLOW","es":"MALVAVISCO","quantidade_base":57},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":448},{"pt":"BISCOITO MAISENA","en":"GRAHAM CRACKERS","es":"GALLETAS GRAHAM","quantidade_base":76}]},{"num":7,"nome":{"pt":"OREO COOKIE","en":"OREO COOKIE","es":"OREO COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":258},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":72},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":108},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":398},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":380},{"pt":"BISCOITO OREO","en":"OREO COOKIES","es":"GALLETAS OREO","quantidade_base":190}]},{"num":8,"nome":{"pt":"NUTELLA COOKIE","en":"NUTELLA COOKIE","es":"NUTELLA COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":242},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":398},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":308},{"pt":"NUTELLA","en":"NUTELLA","es":"NUTELLA","quantidade_base":230}]},{"num":9,"nome":{"pt":"OVOMALTINE COOKIE","en":"OVOMALTINE COOKIE","es":"OVOMALTINE COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":392},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":370},{"pt":"OVOMALTINE","en":"OVOMALTINE","es":"OVOMALTINE","quantidade_base":162}]},{"num":10,"nome":{"pt":"MM'S COOKIES","en":"MM'S COOKIES","es":"MM'S COOKIES"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":258},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":398},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":318},{"pt":"CONFEITOS M&M'S","en":"M&M'S CANDIES","es":"CONFITES M&M'S","quantidade_base":205}]},{"num":11,"nome":{"pt":"REDVELVET","en":"REDVELVET","es":"REDVELVET"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":72},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":108},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":392},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CACAU EM PÓ","en":"COCOA POWDER","es":"CACAO EN POLVO","quantidade_base":20},{"pt":"CORANTE VERMELHO","en":"RED FOOD COLORING","es":"COLORANTE ROJO","quantidade_base":15},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":395}]},{"num":12,"nome":{"pt":"FUNFETTI COOKIE","en":"FUNFETTI COOKIE","es":"FUNFETTI COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":260},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":392},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":388},{"pt":"CONFEITOS COLORIDOS","en":"RAINBOW SPRINKLES","es":"CONFITES DE COLORES","quantidade_base":137}]},{"num":13,"nome":{"pt":"PEANUT AND JELLY COOKIE","en":"PEANUT AND JELLY COOKIE","es":"PEANUT AND JELLY COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":240},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":390},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":322},{"pt":"PASTA DE AMENDOIM","en":"PEANUT BUTTER","es":"CREMA DE CACAHUATE","quantidade_base":130},{"pt":"GELEIA DE MORANGO","en":"STRAWBERRY JAM","es":"MERMELADA DE FRESA","quantidade_base":95}]},{"num":14,"nome":{"pt":"LOTUS COOKIE","en":"LOTUS COOKIE","es":"LOTUS COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":392},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":370},{"pt":"BISCOITOS LOTUS","en":"LOTUS COOKIES","es":"GALLETAS LOTUS","quantidade_base":160}]},{"num":15,"nome":{"pt":"KINDER COOKIE","en":"KINDER COOKIE","es":"KINDER COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":252},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":394},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":368},{"pt":"CHOCOLATES KINDER","en":"KINDER CHOCOLATES","es":"CHOCOLATES KINDER","quantidade_base":165}]},{"num":16,"nome":{"pt":"GOIABADA COM QUEIJO","en":"GOIABADA COM QUEIJO","es":"GOIABADA COM QUEIJO"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":250},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":388},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":351},{"pt":"GOIABADA","en":"GUAVA PASTE","es":"DULCE DE GUAYABA","quantidade_base":145},{"pt":"QUEIJO MINAS","en":"MINAS CHEESE","es":"QUESO MINAS","quantidade_base":145}]},{"num":17,"nome":{"pt":"CHURROS COOKIE","en":"CHURROS COOKIE","es":"CHURROS COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":258},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":392},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CANELA EM PÓ","en":"CINNAMON POWDER","es":"CANELA EN POLVO","quantidade_base":8},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":389},{"pt":"DOCE DE LEITE","en":"DULCE DE LECHE","es":"DULCE DE LECHE","quantidade_base":130}]},{"num":18,"nome":{"pt":"BANOFFE COOKIE","en":"BANOFFE COOKIE","es":"BANOFFE COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":252},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":388},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":342},{"pt":"BANANA DESIDRATADA","en":"DRIED BANANA","es":"BANANA DESHIDRATADA","quantidade_base":115},{"pt":"DOCE DE LEITE","en":"DULCE DE LECHE","es":"DULCE DE LECHE","quantidade_base":130}]},{"num":19,"nome":{"pt":"CHARGE COOKIE","en":"CHARGE COOKIE","es":"CHARGE COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":392},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":340},{"pt":"AMENDOIM","en":"PEANUTS","es":"CACAHUATES","quantidade_base":140},{"pt":"DOCE DE LEITE","en":"DULCE DE LECHE","es":"DULCE DE LECHE","quantidade_base":120}]},{"num":20,"nome":{"pt":"OATMEAL COOKIES","en":"OATMEAL COOKIES","es":"OATMEAL COOKIES"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":240},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":85},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":105},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":75},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":300},{"pt":"AVEIA EM FLOCOS","en":"ROLLED OATS","es":"AVENA EN HOJUELAS","quantidade_base":150},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CANELA EM PÓ","en":"CINNAMON POWDER","es":"CANELA EN POLVO","quantidade_base":5},{"pt":"UVAS PASSAS","en":"RAISINS","es":"PASAS","quantidade_base":145},{"pt":"NOZES","en":"WALNUTS","es":"NUECES","quantidade_base":130}]},{"num":21,"nome":{"pt":"CAPPUCCINO","en":"CAPPUCCINO","es":"CAPPUCCINO"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":72},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":108},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":388},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CAFÉ SOLÚVEL","en":"INSTANT COFFEE","es":"CAFÉ INSTANTÁNEO","quantidade_base":12},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":372},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":150}]},{"num":22,"nome":{"pt":"LEMON PIE","en":"LEMON PIE","es":"LEMON PIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":248},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":386},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"LIMÃO SICILIANO","en":"LEMON ZEST","es":"LIMÓN","quantidade_base":15},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":340},{"pt":"MARSHMALLOW","en":"MARSHMALLOW","es":"MALVAVISCO","quantidade_base":190}]},{"num":23,"nome":{"pt":"PISTACHE","en":"PISTACHE","es":"PISTACHE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":250},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":386},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":353},{"pt":"PISTACHE","en":"PISTACHIOS","es":"PISTACHOS","quantidade_base":190}]},{"num":24,"nome":{"pt":"COCONUT CARAMEL","en":"COCONUT CARAMEL","es":"COCONUT CARAMEL"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":252},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":382},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"COCO RALADO","en":"SHREDDED COCONUT","es":"COCO RALLADO","quantidade_base":95},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","es":"CHOCOLATE BLANCO","quantidade_base":338},{"pt":"DOCE DE LEITE","en":"DULCE DE LECHE","es":"DULCE DE LECHE","quantidade_base":110}]},{"num":25,"nome":{"pt":"PRESTIGIO COCONUT DARK","en":"PRESTIGIO COCONUT DARK","es":"PRESTIGIO COCONUT DARK"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":248},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":372},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CACAU EM PÓ","en":"COCOA POWDER","es":"CACAO EN POLVO","quantidade_base":22},{"pt":"COCO RALADO","en":"SHREDDED COCONUT","es":"COCO RALLADO","quantidade_base":90},{"pt":"CHOCOLATE MEIO AMARGO","en":"SEMISWEET CHOCOLATE","es":"CHOCOLATE SEMIDULCE","quantidade_base":345}]},{"num":26,"nome":{"pt":"BELGA COOKIE","en":"BELGA COOKIE","es":"BELGA COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":385},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE MEIO AMARGO","en":"SEMISWEET CHOCOLATE","es":"CHOCOLATE SEMIDULCE","quantidade_base":252},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":285}]},{"num":27,"nome":{"pt":"DUO BLACK COOKIE","en":"DUO BLACK COOKIE","es":"DUO BLACK COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":248},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":72},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":108},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":370},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CACAU EM PÓ","en":"COCOA POWDER","es":"CACAO EN POLVO","quantidade_base":30},{"pt":"CACAU EM PÓ BLACK","en":"BLACK COCOA POWDER","es":"CACAO NEGRO EN POLVO","quantidade_base":15},{"pt":"CHOCOLATE MEIO AMARGO","en":"SEMISWEET CHOCOLATE","es":"CHOCOLATE SEMIDULCE","quantidade_base":264},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":200}]},{"num":28,"nome":{"pt":"CARAMEL CRUNCH","en":"CARAMEL CRUNCH","es":"CARAMEL CRUNCH"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":382},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":350},{"pt":"CARAMELO CROCANTE","en":"CRUNCHY CARAMEL","es":"CARAMELO CRUJIENTE","quantidade_base":190}]},{"num":29,"nome":{"pt":"DARK CARAMEL","en":"DARK CARAMEL","es":"DARK CARAMEL"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":248},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":72},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":108},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":375},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CACAU EM PÓ","en":"COCOA POWDER","es":"CACAO EN POLVO","quantidade_base":24},{"pt":"CHOCOLATE MEIO AMARGO","en":"SEMISWEET CHOCOLATE","es":"CHOCOLATE SEMIDULCE","quantidade_base":330},{"pt":"GOTAS DE CARAMELO","en":"CARAMEL CHIPS","es":"CHIPS DE CARAMELO","quantidade_base":150}]},{"num":30,"nome":{"pt":"CARAMELO COOKIE","en":"CARAMELO COOKIE","es":"CARAMELO COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":388},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":344},{"pt":"GOTAS DE CARAMELO","en":"CARAMEL CHIPS","es":"CHIPS DE CARAMELO","quantidade_base":190}]},{"num":31,"nome":{"pt":"LEMON SICILIANO COOKIE","en":"LEMON SICILIANO COOKIE","es":"LEMON SICILIANO COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":252},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":390},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"LIMÃO SICILIANO","en":"LEMON ZEST","es":"LIMÓN","quantidade_base":20},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":415}]},{"num":32,"nome":{"pt":"SICILIANO BLUEBERRY","en":"SICILIANO BLUEBERRY","es":"SICILIANO BLUEBERRY"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":250},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":384},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"LIMÃO SICILIANO","en":"LEMON ZEST","es":"LIMÓN","quantidade_base":18},{"pt":"MIRTILO DESIDRATADO","en":"DRIED BLUEBERRY","es":"ARÁNDANO DESHIDRATADO","quantidade_base":125},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":302}]},{"num":33,"nome":{"pt":"BLUEBERRY CHEESECAKE","en":"BLUEBERRY CHEESECAKE","es":"BLUEBERRY CHEESECAKE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":248},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":68},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":112},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":382},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"MIRTILO DESIDRATADO","en":"DRIED BLUEBERRY","es":"ARÁNDANO DESHIDRATADO","quantidade_base":145},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":294},{"pt":"CREAM CHEESE","en":"CREAM CHEESE","es":"QUESO CREMA","quantidade_base":110}]},{"num":34,"nome":{"pt":"COOKIE LARANJA COM MACADÂMIAS","en":"COOKIE LARANJA COM MACADÂMIAS","es":"COOKIE LARANJA COM MACADÂMIAS"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":250},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":76},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":390},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"RASPAS DE LARANJA","en":"ORANGE ZEST","es":"RALLADURA DE NARANJA","quantidade_base":15},{"pt":"CHOCOLATE BRANCO","en":"WHITE CHOCOLATE","es":"CHOCOLATE BLANCO","quantidade_base":329},{"pt":"MACADÂMIA","en":"MACADAMIA NUTS","es":"NUECES DE MACADAMIA","quantidade_base":195}]},{"num":35,"nome":{"pt":"ORE & NUTELLA","en":"ORE & NUTELLA","es":"ORE & NUTELLA"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":252},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":378},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":297},{"pt":"NUTELLA","en":"NUTELLA","es":"NUTELLA","quantidade_base":150},{"pt":"BISCOITO OREO","en":"OREO COOKIES","es":"GALLETAS OREO","quantidade_base":150}]},{"num":36,"nome":{"pt":"CHOCOLATE CHIP CARAMEL","en":"CHOCOLATE CHIP CARAMEL","es":"CHOCOLATE CHIP CARAMEL"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":255},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":387},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"GOTAS DE CHOCOLATE","en":"CHOCOLATE CHIPS","es":"CHISPAS DE CHOCOLATE","quantidade_base":345},{"pt":"GOTAS DE CARAMELO","en":"CARAMEL CHIPS","es":"CHIPS DE CARAMELO","quantidade_base":140}]},{"num":37,"nome":{"pt":"BACON COOKIE","en":"BACON COOKIE","es":"BACON COOKIE"},"ingredientes":[{"pt":"MANTEIGA SEM SAL","en":"UNSALTED BUTTER","es":"MANTEQUILLA SIN SAL","quantidade_base":250},{"pt":"AÇÚCAR MASCAVO","en":"BROWN SUGAR","es":"AZÚCAR MORENA","quantidade_base":70},{"pt":"AÇÚCAR REFINADO","en":"REFINED SUGAR","es":"AZÚCAR REFINADO","quantidade_base":110},{"pt":"OVOS","en":"EGGS","es":"HUEVOS","quantidade_base":78},{"pt":"FARINHA DE TRIGO","en":"ALL PURPOSE FLOUR","es":"HARINA DE TRIGO","quantidade_base":382},{"pt":"FERMENTO QUÍMICO EM PÓ","en":"BAKING POWDER","es":"POLVO DE HORNEAR","quantidade_base":5},{"pt":"BICARBONATO DE SÓDIO","en":"BAKING SODA","es":"BICARBONATO","quantidade_base":5},{"pt":"SAL","en":"SALT","es":"SAL","quantidade_base":5},{"pt":"XAROPE DE BORDO","en":"MAPLE SYRUP","es":"JARABE DE ARCE","quantidade_base":80},{"pt":"CHOCOLATE AO LEITE","en":"MILK CHOCOLATE","es":"CHOCOLATE CON LECHE","quantidade_base":325},{"pt":"BACON CROCANTE","en":"CRISPY BACON","es":"TOCINO CRUJIENTE","quantidade_base":160}]}];

const TRANSLATIONS = {
  pt: {
    title: "Calculadora de Cookies",
    subtitle: "by Chef Áureo Magalhães",
    calculator: "Calculadora",
    shoppingList: "Lista de Compras",
    pricing: "Precificação",
    selectRecipe: "Selecione uma Receita",
    unitWeight: "Peso/Unidade (g)",
    quantity: "Quantidade",
    ingredients: "Ingredientes Necessários",
    addToList: "Adicionar à Lista",
    downloadPDF: "Baixar PDF",
    totalByIngredient: "Total por Ingrediente",
    recipesAdded: "receitas adicionadas",
    clear: "Limpar",
    ingredientCost: "Custo de Ingredientes",
    packagingCost: "Custo de Embalagem",
    desiredMargin: "Margem Desejada (%)",
    suggestedPrice: "Preço Sugerido",
    perUnit: "por unidade",
    grams: "g",
    totalProduction: "Total Produção",
    currency: "Moeda",
    units: "Unidades",
    metric: "Métrico (g)",
    imperial: "Imperial (oz)",
    search: "Buscar receita..."
  },
  en: {
    title: "Cookie Calculator",
    subtitle: "by Chef Áureo Magalhães",
    calculator: "Calculator",
    shoppingList: "Shopping List",
    pricing: "Pricing",
    selectRecipe: "Select a Recipe",
    unitWeight: "Unit Weight (g)",
    quantity: "Quantity",
    ingredients: "Required Ingredients",
    addToList: "Add to List",
    downloadPDF: "Download PDF",
    totalByIngredient: "Total by Ingredient",
    recipesAdded: "recipes added",
    clear: "Clear",
    ingredientCost: "Ingredient Cost",
    packagingCost: "Packaging Cost",
    desiredMargin: "Desired Margin (%)",
    suggestedPrice: "Suggested Price",
    perUnit: "per unit",
    grams: "g",
    totalProduction: "Total Production",
    currency: "Currency",
    units: "Units",
    metric: "Metric (g)",
    imperial: "Imperial (oz)",
    search: "Search recipe..."
  },
  es: {
    title: "Calculadora de Galletas",
    subtitle: "by Chef Áureo Magalhães",
    calculator: "Calculadora",
    shoppingList: "Lista de Compras",
    pricing: "Precio",
    selectRecipe: "Seleccionar Receta",
    unitWeight: "Peso/Unidad (g)",
    quantity: "Cantidad",
    ingredients: "Ingredientes Necesarios",
    addToList: "Agregar a la Lista",
    downloadPDF: "Descargar PDF",
    totalByIngredient: "Total por Ingrediente",
    recipesAdded: "recetas agregadas",
    clear: "Limpiar",
    ingredientCost: "Costo de Ingredientes",
    packagingCost: "Costo de Embalaje",
    desiredMargin: "Margen Deseado (%)",
    suggestedPrice: "Precio Sugerido",
    perUnit: "por unidad",
    grams: "g",
    totalProduction: "Producción Total",
    currency: "Moneda",
    units: "Unidades",
    metric: "Métrico (g)",
    imperial: "Imperial (oz)",
    search: "Buscar receta..."
  }
};

// Conversão de unidades
const convertUnits = (grams, unit = 'oz') => {
  const conversions = {
    oz: grams / 28.35,
    lb: grams / 453.59,
    cups: grams / 125,
  };
  return conversions[unit] || grams;
};

// Símbolo de moeda
const CURRENCY_SYMBOLS = {
  BRL: 'R$',
  USD: '$',
  EUR: '€'
};

function CookieCalculatorApp() {
  const [language, setLanguage] = useState('pt');
  const [activeTab, setActiveTab] = useState('calculator');
  const [darkMode, setDarkMode] = useState(false);
  const [currency, setCurrency] = useState('BRL');
  const [unitSystem, setUnitSystem] = useState('metric'); // 'metric' or 'imperial'
  const [searchTerm, setSearchTerm] = useState('');
  
  // Calculator state
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [unitWeight, setUnitWeight] = useState(150);
  const [quantity, setQuantity] = useState(10);
  
  // Shopping list state
  const [shoppingList, setShoppingList] = useState([]);
  
  // Pricing state
  const [ingredientCosts, setIngredientCosts] = useState({});
  const [packagingCost, setPackagingCost] = useState(2.0);
  const [desiredMargin, setDesiredMargin] = useState(40);
  
  // Exchange rates (simplified)
  const exchangeRates = { BRL: 1, USD: 5.0, EUR: 5.5 };
  
  const t = TRANSLATIONS[language];
  
  // Filtrar receitas por busca
  const filteredRecipes = useMemo(() => {
    if (!searchTerm) return RECIPES_DATA;
    return RECIPES_DATA.filter(r => 
      r.nome[language].toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, language]);
  
  // Calcular ingredientes escalados
  const scaledIngredients = useMemo(() => {
    if (!selectedRecipe) return [];
    
    const recipe = RECIPES_DATA.find(r => r.nome[language] === selectedRecipe);
    if (!recipe) return [];
    
    const totalWeight = recipe.ingredientes.reduce((sum, ing) => sum + ing.quantidade_base, 0);
    const scaleFactor = (unitWeight * quantity) / totalWeight;
    
    return recipe.ingredientes.map(ing => ({
      ...ing,
      scaled: Math.round(ing.quantidade_base * scaleFactor * 10) / 10
    }));
  }, [selectedRecipe, unitWeight, quantity, language]);
  
  // Consolidar lista de compras
  const consolidatedList = useMemo(() => {
    const consolidated = {};
    
    shoppingList.forEach(item => {
      item.ingredients.forEach(ing => {
        const key = ing[language];
        if (!consolidated[key]) {
          consolidated[key] = { name: ing, total: 0 };
        }
        consolidated[key].total += ing.scaled;
      });
    });
    
    return Object.values(consolidated).sort((a, b) => 
      a.name[language].localeCompare(b.name[language])
    );
  }, [shoppingList, language]);
  
  // Calcular precificação
  const pricing = useMemo(() => {
    if (scaledIngredients.length === 0) return null;
    
    const totalIngredientCost = scaledIngredients.reduce((sum, ing) => {
      const cost = ingredientCosts[ing[language]] || 0;
      return sum + (cost * ing.scaled / 1000);
    }, 0);
    
    const totalCost = totalIngredientCost + packagingCost;
    const suggestedPrice = totalCost / (1 - desiredMargin / 100);
    const pricePerUnit = suggestedPrice / quantity;
    
    // Conversão de moeda
    const rate = exchangeRates[currency];
    
    return {
      ingredientCost: totalIngredientCost / rate,
      totalCost: totalCost / rate,
      suggestedPrice: suggestedPrice / rate,
      pricePerUnit: pricePerUnit / rate,
      profit: (suggestedPrice - totalCost) / rate
    };
  }, [scaledIngredients, ingredientCosts, packagingCost, desiredMargin, quantity, language, currency, exchangeRates]);
  
  const addToShoppingList = () => {
    if (!selectedRecipe || scaledIngredients.length === 0) return;
    
    setShoppingList([...shoppingList, {
      recipe: selectedRecipe,
      unitWeight,
      quantity,
      ingredients: scaledIngredients
    }]);
  };
  
  const clearShoppingList = () => {
    setShoppingList([]);
  };
  
  // Load/Save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('cookieCalculatorData_v2');
    if (saved) {
      const data = JSON.parse(saved);
      setShoppingList(data.shoppingList || []);
      setIngredientCosts(data.ingredientCosts || {});
      setLanguage(data.language || 'pt');
      setDarkMode(data.darkMode || false);
      setCurrency(data.currency || 'BRL');
      setUnitSystem(data.unitSystem || 'metric');
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cookieCalculatorData_v2', JSON.stringify({
      shoppingList,
      ingredientCosts,
      language,
      darkMode,
      currency,
      unitSystem
    }));
  }, [shoppingList, ingredientCosts, language, darkMode, currency, unitSystem]);
  
  // Formatador de quantidade
  const formatQuantity = (grams) => {
    if (unitSystem === 'imperial') {
      const oz = convertUnits(grams, 'oz');
      return `${oz.toFixed(2)} oz`;
    }
    return `${Math.round(grams)}g`;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900 text-amber-50' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-amber-900/30' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-amber-800' : 'border-amber-200'} sticky top-0 z-50 shadow-lg`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${darkMode ? 'bg-gradient-to-br from-amber-600 to-orange-600' : 'bg-gradient-to-br from-amber-400 to-orange-500'} shadow-lg`}>
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className={`text-2xl md:text-3xl font-bold ${darkMode ? 'text-amber-400' : 'text-amber-900'}`} style={{ fontFamily: 'Georgia, serif' }}>
                  {t.title}
                </h1>
                <p className={`text-sm ${darkMode ? 'text-amber-300/70' : 'text-amber-700/70'}`}>{t.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              {/* Currency Selector */}
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  darkMode ? 'bg-amber-900/50 text-amber-100 border border-amber-700' : 'bg-white text-amber-900 border border-amber-300'
                }`}
              >
                <option value="BRL">🇧🇷 BRL (R$)</option>
                <option value="USD">🇺🇸 USD ($)</option>
                <option value="EUR">🇪🇺 EUR (€)</option>
              </select>
              
              {/* Unit System Toggle */}
              <button
                onClick={() => setUnitSystem(unitSystem === 'metric' ? 'imperial' : 'metric')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  darkMode ? 'bg-amber-900/50 text-amber-100 hover:bg-amber-800/50' : 'bg-white text-amber-900 hover:bg-amber-50'
                }`}
              >
                <Scale className="w-4 h-4" />
                {unitSystem === 'metric' ? t.metric : t.imperial}
              </button>
              
              {/* Language Selector */}
              <div className="flex gap-1 bg-white/10 backdrop-blur-sm rounded-lg p-1">
                {['pt', 'en', 'es'].map(lang => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                      language === lang
                        ? darkMode ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white'
                        : darkMode ? 'text-amber-300 hover:bg-white/10' : 'text-amber-800 hover:bg-white/20'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all ${
                  darkMode ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white'
                } hover:scale-110`}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {[
              { id: 'calculator', icon: Calculator, label: t.calculator },
              { id: 'shopping', icon: ShoppingCart, label: t.shoppingList, badge: shoppingList.length },
              { id: 'pricing', icon: DollarSign, label: t.pricing }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? darkMode 
                      ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg' 
                      : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                    : darkMode
                      ? 'bg-white/5 text-amber-300 hover:bg-white/10'
                      : 'bg-white/50 text-amber-800 hover:bg-white/80'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.badge > 0 && (
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    darkMode ? 'bg-amber-400 text-gray-900' : 'bg-amber-900 text-white'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="max-w-4xl mx-auto">
            <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/90'} backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border ${darkMode ? 'border-amber-800/30' : 'border-amber-200'}`}>
              {/* Search Bar */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder={t.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border-2 ${
                    darkMode 
                      ? 'bg-gray-900/50 border-amber-700 text-amber-100 placeholder-amber-400/50' 
                      : 'bg-white border-amber-300 text-gray-900 placeholder-amber-600/50'
                  } focus:outline-none focus:ring-2 focus:ring-amber-500`}
                />
                <p className={`text-xs mt-2 ${darkMode ? 'text-amber-300/60' : 'text-amber-700/60'}`}>
                  {filteredRecipes.length} receitas disponíveis
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Recipe Selector */}
                <div className="md:col-span-3">
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                    {t.selectRecipe}
                  </label>
                  <select
                    value={selectedRecipe}
                    onChange={(e) => {
                      setSelectedRecipe(e.target.value);
                      setSearchTerm('');
                    }}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      darkMode 
                        ? 'bg-gray-900/50 border-amber-700 text-amber-100' 
                        : 'bg-white border-amber-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium`}
                  >
                    <option value="">{t.selectRecipe}</option>
                    {filteredRecipes.map(recipe => (
                      <option key={recipe.num} value={recipe.nome[language]}>
                        {recipe.nome[language]}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Unit Weight */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                    {t.unitWeight}
                  </label>
                  <input
                    type="number"
                    value={unitWeight}
                    onChange={(e) => setUnitWeight(Number(e.target.value))}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      darkMode 
                        ? 'bg-gray-900/50 border-amber-700 text-amber-100' 
                        : 'bg-white border-amber-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium`}
                  />
                </div>
                
                {/* Quantity */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                    {t.quantity}
                  </label>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      darkMode 
                        ? 'bg-gray-900/50 border-amber-700 text-amber-100' 
                        : 'bg-white border-amber-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium`}
                  />
                </div>
                
                {/* Total Production */}
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                    {t.totalProduction}
                  </label>
                  <div className={`px-4 py-3 rounded-xl border-2 ${
                    darkMode 
                      ? 'bg-amber-900/20 border-amber-700 text-amber-300' 
                      : 'bg-amber-50 border-amber-300 text-amber-900'
                  } font-bold text-lg`}>
                    {formatQuantity(unitWeight * quantity)}
                  </div>
                </div>
              </div>
              
              {/* Ingredients List */}
              {scaledIngredients.length > 0 && (
                <div className="mt-8">
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                    🍪 {t.ingredients}
                  </h3>
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {scaledIngredients.map((ing, idx) => (
                      <div 
                        key={idx}
                        className={`flex justify-between items-center px-4 py-3 rounded-lg ${
                          darkMode ? 'bg-gray-900/30' : 'bg-amber-50/50'
                        } border ${darkMode ? 'border-amber-800/30' : 'border-amber-200/50'}`}
                      >
                        <span className="font-medium">{ing[language]}</span>
                        <span className={`font-bold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                          {formatQuantity(ing.scaled)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={addToShoppingList}
                    className={`w-full mt-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' 
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                    }`}
                  >
                    <Plus className="inline w-5 h-5 mr-2" />
                    {t.addToList}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Shopping List Tab */}
        {activeTab === 'shopping' && (
          <div className="max-w-4xl mx-auto">
            <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/90'} backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border ${darkMode ? 'border-amber-800/30' : 'border-amber-200'}`}>
              <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                  🛒 {t.shoppingList}
                </h2>
                {shoppingList.length > 0 && (
                  <button
                    onClick={clearShoppingList}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      darkMode 
                        ? 'bg-red-600 text-white hover:bg-red-700' 
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                  >
                    <Trash2 className="inline w-4 h-4 mr-2" />
                    {t.clear}
                  </button>
                )}
              </div>
              
              {shoppingList.length === 0 ? (
                <div className={`text-center py-12 ${darkMode ? 'text-amber-300/50' : 'text-amber-700/50'}`}>
                  <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-lg">Adicione receitas para ver a lista consolidada</p>
                </div>
              ) : (
                <>
                  <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-amber-900/20' : 'bg-amber-50'}`}>
                    <p className={`text-sm ${darkMode ? 'text-amber-300' : 'text-amber-800'}`}>
                      {shoppingList.length} {t.recipesAdded}
                    </p>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                    {t.totalByIngredient}
                  </h3>
                  
                  <div className="space-y-2">
                    {consolidatedList.map((item, idx) => (
                      <div 
                        key={idx}
                        className={`flex justify-between items-center px-4 py-3 rounded-lg ${
                          darkMode ? 'bg-gray-900/30' : 'bg-amber-50/50'
                        } border ${darkMode ? 'border-amber-800/30' : 'border-amber-200/50'}`}
                      >
                        <span className="font-medium">{item.name[language]}</span>
                        <span className={`font-bold text-lg ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                          {formatQuantity(item.total)}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => alert('Função de exportar PDF em desenvolvimento!')}
                    className={`w-full mt-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white' 
                        : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                    }`}
                  >
                    <Download className="inline w-5 h-5 mr-2" />
                    {t.downloadPDF}
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div className="max-w-4xl mx-auto">
            <div className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/90'} backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 border ${darkMode ? 'border-amber-800/30' : 'border-amber-200'}`}>
              <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                💰 {t.pricing} ({CURRENCY_SYMBOLS[currency]})
              </h2>
              
              {!selectedRecipe ? (
                <div className={`text-center py-12 ${darkMode ? 'text-amber-300/50' : 'text-amber-700/50'}`}>
                  <DollarSign className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-lg">Selecione uma receita na calculadora para precificar</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Cost Inputs */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                        {t.packagingCost} ({CURRENCY_SYMBOLS[currency]})
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        value={packagingCost}
                        onChange={(e) => setPackagingCost(Number(e.target.value))}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          darkMode 
                            ? 'bg-gray-900/50 border-amber-700 text-amber-100' 
                            : 'bg-white border-amber-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium`}
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                        {t.desiredMargin}
                      </label>
                      <input
                        type="number"
                        value={desiredMargin}
                        onChange={(e) => setDesiredMargin(Number(e.target.value))}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          darkMode 
                            ? 'bg-gray-900/50 border-amber-700 text-amber-100' 
                            : 'bg-white border-amber-300 text-gray-900'
                        } focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium`}
                      />
                    </div>
                  </div>
                  
                  {/* Ingredient Costs */}
                  <div>
                    <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                      {t.ingredientCost} ({CURRENCY_SYMBOLS[currency]}/kg)
                    </h3>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {scaledIngredients.map((ing, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <span className="flex-1 text-sm font-medium">{ing[language]}</span>
                          <input
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={ingredientCosts[ing[language]] || ''}
                            onChange={(e) => setIngredientCosts({
                              ...ingredientCosts,
                              [ing[language]]: Number(e.target.value)
                            })}
                            className={`w-32 px-3 py-2 rounded-lg border ${
                              darkMode 
                                ? 'bg-gray-900/50 border-amber-700 text-amber-100' 
                                : 'bg-white border-amber-300 text-gray-900'
                            } focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Results */}
                  {pricing && (
                    <div className={`mt-6 p-6 rounded-xl ${
                      darkMode 
                        ? 'bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-700' 
                        : 'bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300'
                    }`}>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="font-medium">{t.ingredientCost}:</span>
                          <span className={`font-bold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                            {CURRENCY_SYMBOLS[currency]} {pricing.ingredientCost.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">{t.packagingCost}:</span>
                          <span className={`font-bold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                            {CURRENCY_SYMBOLS[currency]} {(packagingCost / exchangeRates[currency]).toFixed(2)}
                          </span>
                        </div>
                        <div className={`border-t ${darkMode ? 'border-amber-700' : 'border-amber-300'} pt-3 flex justify-between`}>
                          <span className="font-bold text-lg">{t.suggestedPrice}:</span>
                          <span className={`font-bold text-2xl ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                            {CURRENCY_SYMBOLS[currency]} {pricing.suggestedPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>{t.perUnit}:</span>
                          <span className={`font-bold ${darkMode ? 'text-amber-300' : 'text-amber-700'}`}>
                            {CURRENCY_SYMBOLS[currency]} {pricing.pricePerUnit.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} backdrop-blur-md border-t ${darkMode ? 'border-amber-800' : 'border-amber-200'} mt-12 py-6`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${darkMode ? 'text-amber-300/70' : 'text-amber-700/70'}`}>
            © 2024 Chef Áureo Magalhães - Cookie Calculator Pro v2.0
          </p>
          <p className={`text-xs mt-2 ${darkMode ? 'text-amber-300/50' : 'text-amber-700/50'}`}>
            37 receitas profissionais • Multi-moeda • Conversão imperial
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CookieCalculatorApp;
