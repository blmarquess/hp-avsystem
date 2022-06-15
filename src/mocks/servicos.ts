export const MOCK_SERVICOS = [
  {
    id: '124141265assa2465',
    title: 'OPORTUNIDADES DE NEGÓCIO',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    imageUrl: '/images/servicos/busines_opportunities.png'
  },
  {
    id: '165assafdad12465',
    title: 'OPORTUNIDADES DE NEGÓCIO',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    imageUrl: '/images/servicos/finance.png'
  },
  {
    id: '124141265assafdad465',
    title: 'OPORTUNIDADES DE NEGÓCIO',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    imageUrl: '/images/servicos/it_consulting.png'
  },
  {
    id: 'asdfadfd12465',
    title: 'OPORTUNIDADES DE NEGÓCIO',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    imageUrl: '/images/servicos/busines_solution.png'
  },
  {
    id: 'asdf12341265assafdad12',
    title: 'OPORTUNIDADES DE NEGÓCIO',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    imageUrl: '/images/servicos/client_management.png'
  },
  {
    id: '1asdf41265assafdad124afd65',
    title: 'OPORTUNIDADES DE NEGÓCIO',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    imageUrl: '/images/servicos/online-consulting.png'
  }
]

export type ServiceType = {
    id: number | string;
    title: string;
    description: string;
    imageUrl: string;
}

export type ClienteImgType = {
  id: number | string;
  imageUrl: string;
}

export const IMAGES_CLIENTES = [
  { id: '123', imageUrl: '/images/clientes/clientes01_1.png' },
  { id: '124', imageUrl: '/images/clientes/clientes02_1.png' },
  { id: '125', imageUrl: '/images/clientes/clientes03_1.png' },
  { id: '126', imageUrl: '/images/clientes/clientes04_1.png' },
  { id: '127', imageUrl: '/images/clientes/clientes05_1.png' },
  { id: '128', imageUrl: '/images/clientes/clientes06_1.png' },
  { id: '129', imageUrl: '/images/clientes/clientes07_1.png' },
  { id: '130', imageUrl: '/images/clientes/clientes08_1.png' },
  { id: '131', imageUrl: '/images/clientes/clientes09_1.png' },
  { id: '132', imageUrl: '/images/clientes/clientes10_1.png' },
  { id: '133', imageUrl: '/images/clientes/clientes11_1.png' },
  { id: '134', imageUrl: '/images/clientes/clientes12_1.png' },
  { id: '135', imageUrl: '/images/clientes/clientes13_1.png' },
  { id: '136', imageUrl: '/images/clientes/clientes14_1.png' },
  { id: '137', imageUrl: '/images/clientes/clientes15_1.png' }
]

export type Historic = {
  label: string;
  date: number;
  description: string;
}

export const DATA_HISTORY = [
  {
    label: 'Select campaign settings',
    date: 2010,
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`
  },
  {
    label: 'Create an ad group',
    date: 2011,
    description:
      'An ad group contains one or more ads which target a shared set of keywords.'
  },
  {
    label: 'Create an ad',
    date: 2012,
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  },
  {
    label: 'Create an ad group',
    date: 2013,
    description:
      'An ad group contains one or more ads which target a shared set of keywords.'
  },
  {
    label: 'Create an ad',
    date: 2014,
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  },
  {
    label: 'Create an ad group',
    date: 2015,
    description:
      'An ad group contains one or more ads which target a shared set of keywords.'
  },
  {
    label: 'Create an ad',
    date: 2016,
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  }
]
