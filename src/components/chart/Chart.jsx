import './chart.scss'
import {
  ResponsiveContainer,
  Tooltip,
  Label,
  AreaChart,
  Area,
} from 'recharts'

const data = [
  { name: 'January', Total: 3200 },
  { name: 'February', Total: 6100 },
  { name: 'March', Total: 5000 },
  { name: 'April', Total: 7000 },
  { name: 'May', Total: 7900 },
  { name: 'June', Total: 8000 },
]

const Chart = ({ aspect, Lower, Higher }) => {
  return (
    <div className='chart-container '>
      {/* Use the correct class name */}
      <div className='line-chart'>
        <div className='line-red'>
          <div className='red'></div>Lower {Lower}
        </div>
        <div className='line-green'>
          <div className='green'></div>Higher{Higher}
        </div>
      </div>
      <ResponsiveContainer width='100%' aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <Label
              value='Your Text Below the Line'
              offset={0}
              position='insideBottom'
            />

            <linearGradient id='total' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor='#ea7d93'
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor='#ea7d93'
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Tooltip />

          <Area
            type='monotone'
            dataKey='Total'
            stroke='#ea7d93'
            fillOpacity={1}
            fill='url(#total)'
          />
        </AreaChart>
      </ResponsiveContainer>
      {/* <div className='orange-dot'>1 BTC = $5.4736</div> */}
    </div>
  )
}

export default Chart
