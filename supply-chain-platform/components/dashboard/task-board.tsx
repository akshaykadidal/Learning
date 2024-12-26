import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function TaskBoard() {
  const tasks = [
    {
      id: 1,
      title: 'Inventory Optimization',
      status: 'In Progress',
      date: 'February 15, 2024',
    },
    {
      id: 2,
      title: 'Supplier Risk Assessment',
      status: 'Pending',
      date: 'February 16, 2024',
    },
    {
      id: 3,
      title: 'Demand Forecasting Update',
      status: 'Completed',
      date: 'February 14, 2024',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-[#A0BF3F]/20 text-[#A0BF3F] border-[#A0BF3F]'
      case 'In Progress':
        return 'bg-[#FA8E29]/20 text-[#FA8E29] border-[#FA8E29]'
      default:
        return 'bg-gray-100 text-gray-600 border-gray-300'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#A0BF3F]">Task Board</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-medium">{task.title}</h3>
                <p className="text-sm text-muted-foreground">{task.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

