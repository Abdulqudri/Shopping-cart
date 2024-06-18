const CURRENCYFORMATTER = new Intl.NumberFormat(undefined,{
	currency: "USD",
	style: "currency",
})

export const formatCurrency = (value: number) => {
	return CURRENCYFORMATTER.format(value)
}