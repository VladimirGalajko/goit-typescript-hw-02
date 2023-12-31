/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/
type DetailsType = {
  createAt: Date
  updateAt: Date
}
type Type1 = {
  title: string
  likes: number
  accounts: string[]
  status: string
}
type Type2 = {
  details: DetailsType
}
type CombineType = Type1 | Type2

const page1: CombineType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
}

const page2: CombineType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

export {}
