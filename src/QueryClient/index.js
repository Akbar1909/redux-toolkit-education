import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'

   // Create a client
 const queryClient = new QueryClient()

 export default queryClient;