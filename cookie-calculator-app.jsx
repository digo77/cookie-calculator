import React, { useState, useMemo, useEffect } from 'react';
import { Download, Plus, Trash2, Calculator, ShoppingCart, DollarSign, Languages, ChefHat, Moon, Sun } from 'lucide-react';

// Dados das receitas (extraídos da planilha)
const RECIPES_DATA = [
  {
    num: 1,
    nome: { pt: "LEMON NUTS", en: "LEMON NUTS", es: "LEMON NUTS" },
    ingredientes: [
      { pt: "MANTEIGA SEM SAL", en: "UNSALTED BUTTER", es: "MANTEQUILLA SIN SAL", quantidade_base: 242 },
      { pt: "AÇÚCAR MASCAVO", en: "BROWN SUGAR", es: "AZÚCAR MORENA", quantidade_base: 92 },
      { pt: "AÇÚCAR REFINADO", en: "REFINED SUGAR", es: "AZÚCAR REFINADO", quantidade_base: 114 },
      { pt: "OVOS", en: "EGGS", es: "HUEVOS", quantidade_base: 80 },
      { pt: "FARINHA DE TRIGO", en: "ALL PURPOSE FLOUR", es: "HARINA DE TRIGO", quantidade_base: 412 },
      { pt: "FERMENTO QUÍMICO EM PÓ", en: "BAKING POWDER", es: "POLVO DE HORNEAR", quantidade_base: 5 },
      { pt: "BICARBONATO DE SÓDIO", en: "BAKING SODA", es: "BICARBONATO", quantidade_base: 5 },
      { pt: "SAL", en: "SALT", es: "SAL", quantidade_base: 5 },
      { pt: "CHOCOLATE BRANCO", en: "WHITE CHOCOLATE", es: "CHOCOLATE BLANCO", quantidade_base: 285 },
      { pt: "OLEAGINOSAS", en: "OILSEEDS", es: "SEMILLAS OLEAGINOSAS", quantidade_base: 240 },
      { pt: "LIMÃO TAHITI", en: "LEMON ZEST", es: "LIMÓN", quantidade_base: 20 }
    ]
  },
  {
    num: 2,
    nome: { pt: "DARK CHOCOLATE COOKIE", en: "DARK CHOCOLATE COOKIE", es: "GALLETA DE CHOCOLATE OSCURO" },
    ingredientes: [
      { pt: "MANTEIGA SEM SAL", en: "UNSALTED BUTTER", es: "MANTEQUILLA SIN SAL", quantidade_base: 235 },
      { pt: "MANTEIGA CLARIFICADA", en: "CLARIFIED BUTTER", es: "MANTEQUILLA CLARIFICADA", quantidade_base: 30 },
      { pt: "AÇÚCAR MASCAVO", en: "BROWN SUGAR", es: "AZÚCAR MORENA", quantidade_base: 85 },
      { pt: "AÇÚCAR REFINADO", en: "REFINED SUGAR", es: "AZÚCAR REFINADO", quantidade_base: 130 },
      { pt: "OVOS", en: "EGGS", es: "HUEVOS", quantidade_base: 105 },
      { pt: "FARINHA DE TRIGO", en: "ALL PURPOSE FLOUR", es: "HARINA DE TRIGO", quantidade_base: 405 },
      { pt: "FERMENTO QUÍMICO EM PÓ", en: "BAKING POWDER", es: "POLVO DE HORNEAR", quantidade_base: 5 },
      { pt: "BICARBONATO DE SÓDIO", en: "BAKING SODA", es: "BICARBONATO", quantidade_base: 5 },
      { pt: "SAL", en: "SALT", es: "SAL", quantidade_base: 5 },
      { pt: "CACAU EM PÓ", en: "COCOA POWDER", es: "CACAO EN POLVO", quantidade_base: 25 },
      { pt: "CHOCOLATE MEIO AMARGO", en: "SEMISWEET CHOCOLATE", es: "CHOCOLATE SEMIDULCE", quantidade_base: 170 },
      { pt: "CHOCOLATE BRANCO", en: "WHITE CHOCOLATE", es: "CHOCOLATE BLANCO", quantidade_base: 300 },
      { pt: "FLOR DE SAL", en: "SEA SALT FLAKES", es: "FLOR DE SAL", quantidade_base: 5 }
    ]
  },
  {
    num: 3,
    nome: { pt: "CHOCOLATE CHIP COOKIE", en: "CHOCOLATE CHIP COOKIE", es: "GALLETA CON CHISPAS DE CHOCOLATE" },
    ingredientes: [
      { pt: "MANTEIGA SEM SAL", en: "UNSALTED BUTTER", es: "MANTEQUILLA SIN SAL", quantidade_base: 242 },
      { pt: "AÇÚCAR MASCAVO", en: "BROWN SUGAR", es: "AZÚCAR MORENA", quantidade_base: 92 },
      { pt: "AÇÚCAR REFINADO", en: "REFINED SUGAR", es: "AZÚCAR REFINADO", quantidade_base: 114 },
      { pt: "OVOS", en: "EGGS", es: "HUEVOS", quantidade_base: 80 },
      { pt: "FARINHA DE TRIGO", en: "ALL PURPOSE FLOUR", es: "HARINA DE TRIGO", quantidade_base: 412 },
      { pt: "FERMENTO QUÍMICO EM PÓ", en: "BAKING POWDER", es: "POLVO DE HORNEAR", quantidade_base: 5 },
      { pt: "BICARBONATO DE SÓDIO", en: "BAKING SODA", es: "BICARBONATO", quantidade_base: 5 },
      { pt: "SAL", en: "SALT", es: "SAL", quantidade_base: 5 },
      { pt: "GOTAS DE CHOCOLATE", en: "CHOCOLATE CHIPS", es: "CHISPAS DE CHOCOLATE", quantidade_base: 545 }
    ]
  },
  {
    num: 4,
    nome: { pt: "SMORE COOKIE", en: "SMORE COOKIE", es: "GALLETA SMORE" },
    ingredientes: [
      { pt: "MANTEIGA SEM SAL", en: "UNSALTED BUTTER", es: "MANTEQUILLA SIN SAL", quantidade_base: 262 },
      { pt: "AÇÚCAR MASCAVO", en: "BROWN SUGAR", es: "AZÚCAR MORENA", quantidade_base: 68 },
      { pt: "AÇÚCAR REFINADO", en: "REFINED SUGAR", es: "AZÚCAR REFINADO", quantidade_base: 106 },
      { pt: "OVOS", en: "EGGS", es: "HUEVOS", quantidade_base: 78 },
      { pt: "FARINHA DE TRIGO", en: "ALL PURPOSE FLOUR", es: "HARINA DE TRIGO", quantidade_base: 390 },
      { pt: "FERMENTO QUÍMICO EM PÓ", en: "BAKING POWDER", es: "POLVO DE HORNEAR", quantidade_base: 5 },
      { pt: "BICARBONATO DE SÓDIO", en: "BAKING SODA", es: "BICARBONATO", quantidade_base: 5 },
      { pt: "SAL", en: "SALT", es: "SAL", quantidade_base: 5 },
      { pt: "MARSHMALLOW", en: "MARSHMALLOW", es: "MALVAVISCO", quantidade_base: 57 },
      { pt: "CHOCOLATE AO LEITE", en: "MILK CHOCOLATE", es: "CHOCOLATE CON LECHE", quantidade_base: 448 },
      { pt: "BISCOITO MAISENA", en: "GRAHAM CRACKERS", es: "GALLETAS GRAHAM", quantidade_base: 76 }
    ]
  }
];

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
    totalProduction: "Total Produção"
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
    totalProduction: "Total Production"
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
    totalProduction: "Producción Total"
  }
};

// Conversão de unidades
const convertUnits = (grams, unit = 'oz') => {
  const conversions = {
    oz: grams / 28.35,
    lb: grams / 453.59,
    cups: grams / 125, // aproximado para farinha
  };
  return conversions[unit] || grams;
};

function CookieCalculatorApp() {
  const [language, setLanguage] = useState('pt');
  const [activeTab, setActiveTab] = useState('calculator');
  const [darkMode, setDarkMode] = useState(false);
  
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
  
  const t = TRANSLATIONS[language];
  
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
      return sum + (cost * ing.scaled / 1000); // custo por grama
    }, 0);
    
    const totalCost = totalIngredientCost + packagingCost;
    const suggestedPrice = totalCost / (1 - desiredMargin / 100);
    const pricePerUnit = suggestedPrice / quantity;
    
    return {
      ingredientCost: totalIngredientCost,
      totalCost,
      suggestedPrice,
      pricePerUnit,
      profit: suggestedPrice - totalCost
    };
  }, [scaledIngredients, ingredientCosts, packagingCost, desiredMargin, quantity, language]);
  
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
    const saved = localStorage.getItem('cookieCalculatorData');
    if (saved) {
      const data = JSON.parse(saved);
      setShoppingList(data.shoppingList || []);
      setIngredientCosts(data.ingredientCosts || {});
      setLanguage(data.language || 'pt');
      setDarkMode(data.darkMode || false);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('cookieCalculatorData', JSON.stringify({
      shoppingList,
      ingredientCosts,
      language,
      darkMode
    }));
  }, [shoppingList, ingredientCosts, language, darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-amber-950 to-gray-900 text-amber-50' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 text-gray-900'
    }`}>
      {/* Header */}
      <header className={`${darkMode ? 'bg-amber-900/30' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-amber-800' : 'border-amber-200'} sticky top-0 z-50 shadow-lg`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
            
            <div className="flex items-center gap-2">
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
              <div className="grid md:grid-cols-3 gap-6">
                {/* Recipe Selector */}
                <div className="md:col-span-3">
                  <label className={`block text-sm font-semibold mb-2 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                    {t.selectRecipe}
                  </label>
                  <select
                    value={selectedRecipe}
                    onChange={(e) => setSelectedRecipe(e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${
                      darkMode 
                        ? 'bg-gray-900/50 border-amber-700 text-amber-100' 
                        : 'bg-white border-amber-300 text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium`}
                  >
                    <option value="">{t.selectRecipe}</option>
                    {RECIPES_DATA.map(recipe => (
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
                    {unitWeight * quantity}g
                  </div>
                </div>
              </div>
              
              {/* Ingredients List */}
              {scaledIngredients.length > 0 && (
                <div className="mt-8">
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-amber-400' : 'text-amber-900'}`}>
                    🍪 {t.ingredients}
                  </h3>
                  <div className="space-y-2">
                    {scaledIngredients.map((ing, idx) => (
                      <div 
                        key={idx}
                        className={`flex justify-between items-center px-4 py-3 rounded-lg ${
                          darkMode ? 'bg-gray-900/30' : 'bg-amber-50/50'
                        } border ${darkMode ? 'border-amber-800/30' : 'border-amber-200/50'}`}
                      >
                        <span className="font-medium">{ing[language]}</span>
                        <div className="flex items-center gap-3">
                          <span className={`font-bold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                            {ing.scaled}g
                          </span>
                          <span className={`text-sm ${darkMode ? 'text-amber-300/60' : 'text-amber-700/60'}`}>
                            ({convertUnits(ing.scaled, 'oz').toFixed(2)} oz)
                          </span>
                        </div>
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
                        <div className="flex items-center gap-3">
                          <span className={`font-bold text-lg ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                            {Math.round(item.total)}g
                          </span>
                          <span className={`text-sm ${darkMode ? 'text-amber-300/60' : 'text-amber-700/60'}`}>
                            ({convertUnits(item.total, 'oz').toFixed(2)} oz)
                          </span>
                        </div>
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
                💰 {t.pricing}
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
                        {t.packagingCost} (R$)
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
                      {t.ingredientCost} (R$/kg)
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
                            R$ {pricing.ingredientCost.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">{t.packagingCost}:</span>
                          <span className={`font-bold ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                            R$ {packagingCost.toFixed(2)}
                          </span>
                        </div>
                        <div className={`border-t ${darkMode ? 'border-amber-700' : 'border-amber-300'} pt-3 flex justify-between`}>
                          <span className="font-bold text-lg">{t.suggestedPrice}:</span>
                          <span className={`font-bold text-2xl ${darkMode ? 'text-amber-400' : 'text-amber-600'}`}>
                            R$ {pricing.suggestedPrice.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>{t.perUnit}:</span>
                          <span className={`font-bold ${darkMode ? 'text-amber-300' : 'text-amber-700'}`}>
                            R$ {pricing.pricePerUnit.toFixed(2)}
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
            © 2024 Chef Áureo Magalhães - Cookie Calculator Pro
          </p>
          <p className={`text-xs mt-2 ${darkMode ? 'text-amber-300/50' : 'text-amber-700/50'}`}>
            Desenvolvido com 🍪 para alunos do curso
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CookieCalculatorApp;
