export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  color: string;
  fit: string;
  fabric: string;
  images: string[];
  description?: string;
}

export const productsData: Product[] = [
  {
    id: '1',
    title: 'PEACH POLY GEORGETTE FLORAL PRINTED SUIT SET',
    category: 'Suit Sets',
    price: 3496,
    originalPrice: 4995,
    discount: '30% OFF',
    rating: 4.8,
    color: 'PEACH',
    fit: 'Straight Fit',
    fabric: 'Georgette / Rayon',
    images: ['/blackfront.png', '/blackbackside.png', '/blackleftside.png', '/blackright.png','/pic1.png','/instruction.png'],
    description: 'Radiate understated elegance in this exquisite suit set.',
  },
  {
    id: '2',
    title: 'Designer Black Patchwork Shirt',
    category: 'Shirts',
    price: 2999,
    originalPrice: 3999,
    discount: '25% OFF',
    rating: 4.9,
    color: 'BLACK',
    fit: 'Slim Fit',
    fabric: 'Cotton Blend',
    images: [
      '/black1.png',
      '/black1backside.png',
      '/black1leftside.png',
      '/black1rightside.png',
      '/black111.png',
      '/instruction.png'
    ],
    description: 'Premium handcrafted black ethnic patchwork shirt with stylish shoulder accentuation.',
  },
  {
  id: '3',
  title: 'Maroon Printed Circle Pattern Shirt',
  category: 'Shirts',
  price: 2799,
  originalPrice: 3799,
  discount: '26% OFF',
  rating: 4.8,
  color: 'MAROON',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/circle.png',
    '/circleback.png',
    '/circleleftside.png',
    '/circlerightside.png',
    '/pic3.png',
    '/instruction.png'
  ],
  description: 'Stylish maroon ethnic printed shirt featuring geometric circle motifs with front, back & side views.',
},
{
  id: '4',
  title: 'Maroon Ethnic Circular Print Shirt',
  category: 'Shirts',
  price: 2699,
  originalPrice: 3699,
  discount: '27% OFF',
  rating: 4.8,
  color: 'MAROON',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/collection.png',
    '/collectionback.png',
    '/collectionleft.png',
    '/collectionright.png',
    '/pic41.png',
    '/instruction.png'
  ],
  description: 'Premium maroon printed shirt featuring vibrant circular ethnic prints with front, back, and side views.',
},
{
  id: '5',
  title: 'Red Printed Ethnic Shirt',
  category: 'Shirts',
  price: 2799,
  originalPrice: 3799,
  discount: '26% OFF',
  rating: 4.8,
  color: 'RED',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/edcollection.png',
    '/redcollectionback.png',
    '/redcollectionleftside.png',
    '/redcollectionrightside.png',
    '/pic4.png',
    '/instruction.png'
  ],
  description: 'Vibrant red printed ethnic shirt designed with stylish patterns and available in full gallery view.',
},
{
  id: '6',
  title: 'Classic Red Ethnic Pattern Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.8,
  color: 'RED',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/model3.png',
    '/redout.png',
    '/redback.png',
    '/redleft.png',
    '/redright.png',
     '/rd.png',
     '/instruction.png'
  ],
  description: 'Premium red ethnic shirt crafted with lightweight breathable fabric, complete with front, side and back gallery view.',
},
{
  id: '7',
  title: 'Olive Green Floral Printed Shirt',
  category: 'Shirts',
  price: 2799,
  originalPrice: 3799,
  discount: '26% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/green.png',
    '/greenback.png',
      '/greenright.png',
    '/greenfrontside.png',
    '/greenleft.png',
  
    '/pic7.png',
    '/instruction.png'
  ],
  description: 'Stylish olive green shirt with artistic multi-color floral prints, available with full front, back, and side gallery views.',
},
{
  id: '8',
  title: 'White Elephant Motif Printed Half Sleeve Shirt',
  category: 'Shirts',
  price: 2499,
  originalPrice: 3499,
  discount: '28% OFF',
  rating: 4.9,
  color: 'WHITE',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [

    '/pic5.png',
      '/pic99.png',
    '/pica7.png',
    '/pic11.png',

    '/pic9.png',
    '/instruction.png'
  ],
  description: 'Vibrant white casual half-sleeve shirt featuring traditional elephant printed motifs with full multi-angle gallery views.',
},
{
  id: '9',
  title: 'White Elephant Motif Printed Half Sleeve Shirt',
  category: 'Shirts',
  price: 2499,
  originalPrice: 3499,
  discount: '28% OFF',
  rating: 4.9,
  color: 'WHITE',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/model1.png',               // ya '/model1' agar extension nahi hai
    '/whitehathibackside.png',   // ya '/whitehathibackside'
    '/whitehathileftside.png',   // ya '/whitehathileftside'
    '/whitehathirightside.png',  // ya '/whitehathirightside'
    '/pic6.png',
    '/instruction.png'
  ],
  description: 'Vibrant white casual half-sleeve shirt featuring traditional elephant printed motifs with full multi-angle gallery views.',
},
{
  id: '10',
  title: 'Vibrant Yellow Ethnic Printed Shirt',
  category: 'Shirts',
  price: 2699,
  originalPrice: 3699,
  discount: '27% OFF',
  rating: 4.8,
  color: 'YELLOW',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/model7.png',
    '/yellowback.png',
    '/yellowright.png',
    '/pic89.png',
    '/instruction.png'
  ],
  description: 'Bright and vibrant yellow ethnic printed shirt designed for casual and festive occasions, featuring multi-angle views.',
},

{
  id: '11',
  title: 'Vibrant Pink Printed Ethnic Shirt',
  category: 'Shirts',
  price: 2799,
  originalPrice: 3799,
  discount: '26% OFF',
  rating: 4.8,
  color: 'PINK',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/pink.png',
      '/white.png',
    '/whiteback.png',
    '/whiteleft.png',
    '/pinkbackside.png',
    '/pinkrightside.png',
    '/pintleftside.png',
    '/pic111.png',
    '/instruction.png'
  ],
  description: 'Stylish pink printed shirt crafted with premium fabric, complete with multi-angle gallery views.',
},
{
  id: '12',
  title: 'Navy Blue Animal & Palm Printed Ethnic Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'BLUE',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/printendbluetsirt.png',
    '/printendbluetsirtbackside.png',
    '/printendbluetsirtleftside.png',
    '/printendbluetsirtrigthside.png',
    '/pic819.png',
    '/instruction.png'
  ],
  description: 'Premium navy blue ethnic printed shirt featuring stylish animal and palm motifs with full multi-angle gallery views.',
},
{
  id: '13',
  title: 'Off-White Mandala & Elephant Printed Ethnic Shirt',
  category: 'Shirts',
  price: 2799,
  originalPrice: 3799,
  discount: '26% OFF',
  rating: 4.8,
  color: 'WHITE',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/model4.png',
    '/whitebackside.png',
    '/whiteleftside.png',
    '/whiterightside.png',
    '/instruction.png'
  ],
  description: 'Premium off-white ethnic printed shirt featuring traditional mandala and elephant motifs with full gallery view.',
},
{
  id: '14',
  title: 'Royal Blue Geometric Printed Ethnic Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'BLUE',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/printedblue.png',
    '/printedblueback.png',
    '/printedblueleft.png',
    '/printedblueright.png',
    '/pic189.png',
    '/instruction.png'
  ],
  description: 'Stylish royal blue ethnic printed shirt featuring geometric ornamental patterns, complete with full multi-angle gallery views.',
},
{
  id: '15',
  title: 'Designer Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/model5.png',
    '/printedleftside.png',
    '/printedrightside.png',
    '/printedbackside.png',
    '/pic90.png',
    '/instruction.png'
  ],
  description: 'Premium handcrafted printed ethnic shirt crafted with breathable fabric, complete with multi-angle gallery views.',
},
{
  id: '16',
  title: 'Purple Ethnic Geometric Printed Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'PURPLE',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/new.png',
    '/newbackside.png',
    '/newleftside.png',
    '/newrightside.png',
    '/pic87.png',
    '/instruction.png'
  ],
  description: 'Stylish purple ethnic printed shirt with distinctive geometric camera motifs and multi-angle gallery views.',
},
{
  id: '17',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2799,
  originalPrice: 3799,
  discount: '26% OFF',
  rating: 4.8,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/model2.png',
    '/model2back.png',
    '/model2left.png',
    '/pic900.png',
    '/instruction.png'
  ],
  description: 'Premium printed ethnic shirt featuring comfortable breathable fabric with front, back, and side gallery views.',
},
{
  id: '18',
  title: 'Classic Black Ethnic Printed Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'BLACK',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/black.png',
    '/blackleft.png',
    '/blackback.png',
    '/black1111.png',
    '/instruction.png'
  ],
  description: 'Premium black ethnic printed shirt featuring comfortable breathable fabric with complete gallery views.',
},
{
  id: '19',
  title: 'Classic Blue Ethnic Printed Shirt',
  category: 'Shirts',
  price: 2799,
  originalPrice: 3799,
  discount: '26% OFF',
  rating: 4.8,
  color: 'BLUE',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/blueprinted.png',
    '/blueprintedbackside.png',
    '/blueprintedleftside.png',
    '/pic9999.png',
    '/instruction.png'
  ],
  description: 'Stylish blue ethnic printed shirt crafted with premium breathable fabric, featuring front, back, and side gallery views.',
},
{
  id: '20',
  title: 'White Ethnic Printed Designer Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'WHITE',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/whiteprintend.png',
    '/whiteprintendback.png',
    '/whiteprintendleft.png',
    '/whiteprintendlast1.png',
    '/whiteprintendlast.png',
    '/instruction.png'
  ],
  description: 'Premium white ethnic printed designer shirt crafted with breathable fabric, complete with full multi-angle gallery views.',
},
{
  id: '21',
  title: 'Classic Elephant Motif Printed Ethnic Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/elephant1.png',
    '/elephant111.png',
    '/elephant11111.png',
    '/elephant1111111.png',
    '/elephant.png',
    '/instruction.png'
  ],
  description: 'Stylish ethnic printed shirt featuring traditional elephant motifs, complete with full multi-angle gallery views.',
},
{
  id: '22',
  title: 'Camel Motif Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/camelprintend1.png',
    '/camelprintend14.png',
    '/camelprintend141.png',
    '/camelprintend.png',
    '/instruction.png'
  ],
  description: 'Stylish ethnic printed shirt featuring traditional camel motifs, complete with full multi-angle gallery views.',
},
{
  id: '23',
  title: 'Designer Ethnic Printed Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/pica1.png',
    '/pica111.png',
    '/pica111787.png',
    '/pica111787qqq.png',
    '/pica.png',
    '/instruction.png'
  ],
  description: 'Premium designer ethnic printed shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},
{
  id: '24',
  title: 'New Red Collection Ethnic Printed Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'RED',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    
    '/newredcollection.png',
    '/pic899440.png',
   
    '/newredcollectionback.png',
     '/pic8990.png',
     '/instruction.png'
  ],
  description: 'Stylish new red collection ethnic printed casual shirt, complete with front and back gallery views.',
},
{
  id: '25',
  title: 'Classic Ethnic Printed Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/pic09.png',
    '/pic093.png',
    '/pic09311.png',
    '/pic0931111.png',
    '/instruction.png'
  ],
  description: 'Stylish ethnic printed casual shirt crafted with breathable fabric, complete with multi-angle gallery views.',
},
{
  id: '26',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/printed.png',
    '/printed1.png',
    '/printed111.png',
    '/printed781.png',
    '/printed71181.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},
{
  id: '27',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/pic873.png',
    '/pic73.png',
    '/pic73111.png',
    '/pic7319.png',
    '/pic19.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},
{
  id: '28',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/pic88.png',
    '/pic8978.png',
    '/pic89787.png',
    '/pic8977.png',
    '/pic8977998.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},
{
  id: '29',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/pic78.png',
    '/pic7811.png',
    '/pic781112.png',
    '/pic7811112.png',
    '/pic782.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},
{
  id: '30',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/pp1.png',
    '/ppp.png',
    '/pp90p.png',
    '/pp.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},
{
  id: '31',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'MULTI',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/pic998.png',
    '/pic99898.png',
    '/pic9980998.png',
    '/pic99809980.png',
    '/pic9980998098.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},
{
  id: '32',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'RED',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/picred.png',
    '/picred1.png',
    '/picred11.png',
    '/picred119.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},
{
  id: '33',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'Yellow Printed',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/yellowfront.png',
    '/yellowbackside.png',
    '/yellowleftside.png',
    '/yellowoutside.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},



{
  id: '34',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'Green',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/gren.png',
    '/grenback.png',
    '/grenmain.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},

{
  id: '35',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'Red',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/red.png',
    '/redback1.png',
    '/redrleft.png',
    '/redmain.png',
    '/instruction.png'
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},


{
  id: '36',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'Dark Blue Color Printed ',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/printned.png',
    '/printedback.png',
    '/printnedmain.png',
    '/instruction.png'
   
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},


{
  id: '37',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'Dark Blue Color Printed ',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/new1.png',
    '/new1back.png',
    '/new1main.png',
    '/instruction.png'
   
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},

{
  id: '38',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'Dark Blue Color Printed ',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/flower.png',
    '/flowerbacked.png',
    '/flowermain.png',
    '/instruction.png'
   
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},


{
  id: '39',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 2899,
  originalPrice: 3899,
  discount: '25% OFF',
  rating: 4.9,
  color: 'Dark Blue Color Printed ',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/new11.png',
    '/new11back.png',
    '/new11main.png',
    '/instruction.png'
   
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},


{
  id: '40',
  title: 'Classic Printed Ethnic Casual Shirt',
  category: 'Shirts',
  price: 1829,
  originalPrice: 1889,
  discount: '25% OFF',
  rating: 4.9,
  color: 'Dark Black Printed',
  fit: 'Slim Fit',
  fabric: 'Cotton Blend',
  images: [
    '/blackprinted.png',
    '/blackprintedbackside.png',
    '/blackprintedbackside1.png',
    '/instruction.png'
   
  ],
  description: 'Stylish classic printed ethnic casual shirt crafted with comfortable fabric, complete with multi-angle gallery views.',
},


// ................Femaile Kurti......................................//
{
  id: '101',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    '/kurti/kurti1.png',
    '/kurti/kurti2.png',
    '/kurti/kurti3.png',
    '/kurti/kurti4.png',
    '/kurti/kurti5.png',
    '/instrctionfemaile.png'
    
  ],
},


{
  id: '102',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://byshree.com/cdn/shop/files/PG-26190MPLIGHTPINK_detail.jpg?v=1784710809&width=1200',
    'https://byshree.com/cdn/shop/files/PG-26190MPLIGHTPINK_back.jpg?v=1784710809&width=1200',
    'https://byshree.com/cdn/shop/files/PG-26190MPLIGHTPINK_right.jpg?v=1784710809&width=800',
    'https://byshree.com/cdn/shop/files/PG-26190MPLIGHTPINK_closer.jpg?v=1784710809&width=800',
    'https://byshree.com/cdn/shop/files/PG-26190MPLIGHTPINK_main.jpg?v=1784710809&width=800',
     '/instrctionfemaile.png'
   
    
  ],
},



{
  id: '103',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/off-white-floral-printed-cotton-a-line-kurta-g3060_bb5fd6ff-dbcc-4a63-8fb8-043a62df3725.jpg?v=1772772729&width=1800',
    'https://www.libas.in/cdn/shop/files/G3060_1_11b27a6b-c6bd-4638-b1e7-45973e833124.jpg?v=1772772729&width=1800',
    'https://www.libas.in/cdn/shop/files/G3060_3_5abde53d-4c07-4682-bf46-812e9fcffa90.jpg?v=1772772729&width=1800',
    'https://www.libas.in/cdn/shop/files/G3060_5_621b4df0-af42-4855-896d-f97193217ba2.jpg?v=1772772729&width=1800',
    'https://www.libas.in/cdn/shop/files/G3060_6_3f2c5663-9829-44ed-99ee-36dc2c862bd8.jpg?v=1772772729&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},

{
  id: '104',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/29831_6Main.jpg?v=1755939839&width=1800',
    'https://www.libas.in/cdn/shop/files/29831_2.jpg?v=1755939839&width=1800',
    'https://www.libas.in/cdn/shop/files/29831_3.jpg?v=1755939839&width=1800',
    'https://www.libas.in/cdn/shop/files/29831_1.jpg?v=1755939839&width=1800',
    'https://www.libas.in/cdn/shop/files/29831_5.jpg?v=1755939839&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},

{
  id: '106',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/43100_1_0f8daba9-6d12-47c2-8600-d17dfb519736.jpg?v=1768733455&width=1800',
    'https://www.libas.in/cdn/shop/files/43100_2_811dfcd0-0c84-4695-8ab4-7572abbbb3ea.jpg?v=1768733457&width=1800',
    'https://www.libas.in/cdn/shop/files/43100_3_6a488e28-ef46-4c4f-955c-fb3c45cf76ba.jpg?v=1768733455&width=1800',
    'https://www.libas.in/cdn/shop/files/43100_4_54a5c39a-ce91-4405-a67d-81d63b3f8e3f.jpg?v=1768733455&width=1800',
    'https://www.libas.in/cdn/shop/files/43100_2_811dfcd0-0c84-4695-8ab4-7572abbbb3ea.jpg?v=1768733457&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},

{
  id: '107',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/lavender-embroidered-silk-blend-straight-kurta-98450_da802f77-2ebf-41de-b5e1-57774b5eb088.jpg?v=1773994737&width=1800',
    'https://www.libas.in/cdn/shop/files/98450_1_156f6f1e-1d93-47fb-81f7-b926b59de829.jpg?v=1773994737&width=1800',
    'https://www.libas.in/cdn/shop/files/98450_2_01d9afc3-12fb-44d1-8e85-a97f25277754.jpg?v=1773994737&width=1800',
    'https://www.libas.in/cdn/shop/files/98450_3_301e777c-3952-42ff-8d28-94e11eee4487.jpg?v=1773994737&width=1800',
    'https://www.libas.in/cdn/shop/files/98450_4_5a554178-ac89-4637-9810-ddce9e37b2ff.jpg?v=1773994737&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},


{
  id: '108',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/green-floral-embroidered-chanderi-silk-straight-kurta-2996_978a192d-3022-4e1a-867f-d93b74723c92.jpg?v=1763969277&width=1800',
    'https://www.libas.in/cdn/shop/files/29965_2.jpg?v=1763969277&width=1800',
    'https://www.libas.in/cdn/shop/files/29965_3.jpg?v=1763969277&width=1800',
    'https://www.libas.in/cdn/shop/files/29965_4.jpg?v=1763969277&width=1800',
    'https://www.libas.in/cdn/shop/files/29965_5.jpg?v=1763969277&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},

{
  id: '109',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/off-white-printed-cotton-straight-kurta-43084.jpg?v=1769439924&width=1800',
    'https://www.libas.in/cdn/shop/files/43084_2.jpg?v=1769439924&width=1800',
    'https://www.libas.in/cdn/shop/files/43084_3.jpg?v=1769439924&width=1800',
    'https://www.libas.in/cdn/shop/files/43084_1.jpg?v=1769439924&width=1800',
    'https://www.libas.in/cdn/shop/files/43084_4.jpg?v=1769439924&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},

{
  id: '110',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/5_0658eb3d-6c94-4709-85fd-d379912e8375.jpg?v=1756105320&width=1800',
    'https://www.libas.in/cdn/shop/files/1_90473a25-36b8-4c95-b0e3-650d47fca226.jpg?v=1756105320&width=1800',
    'https://www.libas.in/cdn/shop/files/3_6e8a188e-c66b-41c2-ae69-60d415a3ae62.jpg?v=1756105320&width=1800',
    'https://www.libas.in/cdn/shop/files/4_d996f3aa-c259-42a6-be7f-29cbd8349767.jpg?v=1756105320&width=1800',
    'https://www.libas.in/cdn/shop/files/6_8bf45455-b233-4b91-bb39-6bd01c1658a7.jpg?v=1756105320&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},

{
  id: '111',
  title: 'Royal Ethnic Green Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/Libas-Teal-Blue-Floral-Embroidered-Silk-Blend-Straight-Kurta-57166_bdcdbe4f-aa42-4d6d-8541-d3b007ad62d4.jpg?v=1789638608&width=1800',
    'https://www.libas.in/cdn/shop/files/57166_2_2e990566-7718-4b43-8e4e-ce584286523b.jpg?v=1789638608&width=1800',
    'https://www.libas.in/cdn/shop/files/57166_3_549d8669-9fdf-4216-97dc-ff0a20a0b612.jpg?v=1789638608&width=1800',
    'https://www.libas.in/cdn/shop/files/57166_4_4efc3d1c-e41a-447e-bb55-bd9b7b07db5d.jpg?v=1789638608&width=1800',
    'https://www.libas.in/cdn/shop/files/57166_5_8f9261e3-20ae-4d9b-9127-2c7c33044ac6.jpg?v=1789638608&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},
{
  id: '112',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/43749_1_c7418f55-1cf0-4417-8fb4-91f500e4502c.jpg?v=1789638523&width=1800',
    'https://www.libas.in/cdn/shop/files/43749_2_8741c056-d236-42a1-bf6d-aa70367bd653.jpg?v=1789638523&width=1800',
    'https://www.libas.in/cdn/shop/files/43749_3_a2037982-c430-4a73-abb5-956b69861af2.jpg?v=1789638523&width=1800',
    'https://www.libas.in/cdn/shop/files/43749_4_29ec0e90-a0fb-4832-9a51-d53b86a91225.jpg?v=1789638523&width=1800',
    'https://www.libas.in/cdn/shop/files/Libas-Pastel-Green-Floral-Printed-Cotton-Straight-Kurta-43749_cf5a8464-09ef-4cf7-aa67-d14722abc62e.jpg?v=1789638523&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},
{
  id: '113',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/Libas-Fuchsia-Pink-Bandhani-Printed-Chiffon-Straight-Kurta-57062_80b453c6-368c-487b-9439-8bef084bcaee.jpg?v=1786084087&width=1800',
    'https://www.libas.in/cdn/shop/files/57062_1_c1ba676d-f0b0-4ffe-a1ab-05621a2233c9.jpg?v=1786084087&width=1800',
    'https://www.libas.in/cdn/shop/files/57062_2_57b552a0-ae53-4f4c-992c-dd7e483ac0a9.jpg?v=1786084087&width=1800',
    'https://www.libas.in/cdn/shop/files/57062_3_77fad713-1ac3-4c6d-92e8-1d410cd95e44.jpg?v=1786084087&width=1800',
    'https://www.libas.in/cdn/shop/files/57062_4_384c862f-a26c-47ff-9c5f-738b3b91ff88.jpg?v=1786084087&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},




{
  id: '114',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    '/kurti/kurtigreen.png',
    '/Kurti/greenkurtifront.png',
    '/Kurti/greenkurtiback.png',
   
     '/instrctionfemaile.png'
   
    
  ],
},



{
  id: '115',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    '/Kurti/pink.png',
    '/Kurti/pink1.png',
    '/Kurti/pink2.png',
    
     '/instrctionfemaile.png'
   
    
  ],
},




{
  id: '116',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    '/Kurti/orange.png',
    '/Kurti/orangeback.png',
    '/Kurti/orangefont.png',
    '/Kurti/orangefont1.png',
    '/Kurti/orangefont11.png',
     '/instrctionfemaile.png'
   
    
  ],
},




{
  id: '117',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    '/Kurti/kurtinew.png',
    '/Kurti/kurtinew1.png',
    '/Kurti/kurtinewback.png',
    '/Kurti/kurtinewback1.png',
     '/instrctionfemaile.png'
   
    
  ],
},



{
  id: '118',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fflowerstrightkurti.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fflowerstrightkurtifrontside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fflowerstrightkurtibackeside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fflowerstrightkurtirightside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fflowerstrightkurtilefrontside.png&w=1920&q=75',
     '/instrctionfemaile.png'
   
    
  ],
},



{
  id: '119',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2FMangoanarkal.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2FMangoanarkalbackside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2FMangoanarkalfrontside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2FMangoanarkalleftside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2FMangoanarkalrightside.png&w=1920&q=75',
   
     '/instrctionfemaile.png'
   
    
  ],
},


{
  id: '120',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fprinted.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fprintedfront.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fprintedback.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fprintedrigth.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fprintedfeshionside.png&w=1920&q=75',
     '/instrctionfemaile.png'
   
    
  ],
},


{
  id: '121',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fstraightsuitset.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fstraightsuitsetleftside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fstraightsuitsetbackside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fstraightsuitsetlookingside.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Fstraightsuitsetleftside11.png&w=1920&q=75',
     '/instrctionfemaile.png'
   
    
  ],
},


{
  id: '122',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Flightpink.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Flightpinkback.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Flightpinkfront.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Flightpinkleft.png&w=1920&q=75',
    'https://noorbynikki.vercel.app/_next/image?url=%2Fcollection%2Flightpinkright.png&w=1920&q=75',
  
     '/instrctionfemaile.png'
   
    
  ],
},


{
  id: '123',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://noorbynikki.vercel.app/collection/pinkyellow.png',
    'https://noorbynikki.vercel.app/collection/rightsidepink.png',
    'https://noorbynikki.vercel.app/collection/backside.png',
    'https://noorbynikki.vercel.app/collection/leftside.png',
    'https://noorbynikki.vercel.app/collection/pink2.png',
     '/instrctionfemaile.png'
   
    
  ],
},


{
  id: '124',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
    'https://www.libas.in/cdn/shop/files/Libas-Fuchsia-Pink-Bandhani-Printed-Chiffon-Straight-Kurta-57062_80b453c6-368c-487b-9439-8bef084bcaee.jpg?v=1786084087&width=1800',
    'https://www.libas.in/cdn/shop/files/57062_1_c1ba676d-f0b0-4ffe-a1ab-05621a2233c9.jpg?v=1786084087&width=1800',
    'https://www.libas.in/cdn/shop/files/57062_2_57b552a0-ae53-4f4c-992c-dd7e483ac0a9.jpg?v=1786084087&width=1800',
    'https://www.libas.in/cdn/shop/files/57062_3_77fad713-1ac3-4c6d-92e8-1d410cd95e44.jpg?v=1786084087&width=1800',
    'https://www.libas.in/cdn/shop/files/57062_4_384c862f-a26c-47ff-9c5f-738b3b91ff88.jpg?v=1786084087&width=1800',
     '/instrctionfemaile.png'
   
    
  ],
},


{
  id: '125',
  title: 'Royal Ethnic Pink Kurti Set',
  category: 'Kurti', // Yeh exact 'Kurti' hona chahiye
  price: 2499,
  originalPrice: 3499,
  discount: '30% OFF',
  rating: 4.8,
  color: 'GREEN',
  fit: 'Straight Fit',
  fabric: 'Georgette / Rayon',
  description: 'Explore handcrafted ethnic wear, luxury suits, lehengas & artisanal jewellery.',
  images: [
        'https://noorbynikki.vercel.app/collection/cottenstrighsitting.png',
    'https://noorbynikki.vercel.app/collection/cottenstright.png',
    'https://noorbynikki.vercel.app/collection/cottenstrightfront.png',
    'https://noorbynikki.vercel.app/collection/cottenstrightback.png',
    'https://noorbynikki.vercel.app/collection/cottenstrightleft.png',

     '/instrctionfemaile.png'
   
    
  ],
},
];