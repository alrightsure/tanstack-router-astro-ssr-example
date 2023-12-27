import { FileRoute } from '@tanstack/react-router'

export const Route = new FileRoute('/').createRoute({
  component: IndexComponent,
})

function IndexComponent() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}