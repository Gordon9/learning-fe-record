import { useParams } from "react-router-dom";
import servicesData from "./servicesData"


function ServiceDetail() {

  const serviceId = useParams();
  console.log(serviceId)

  const thisService = servicesData.find(service => service._id === serviceId)

  console.log(thisService)

  return (
    <div>
      <h1>Service Detail Page</h1>
      <h3>${thisService.name} - ${thisService.price}</h3>
      <p>${thisService.description}</p>
    </div>
  )
}

export default ServiceDetail