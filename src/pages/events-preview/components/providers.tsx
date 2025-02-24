import { serviceProviders } from "../../events-create/components/step1";

export function EventServiceProviders() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
                {serviceProviders.map(provider => (
                    <div className="flex items-center flex-col gap-2 border p-2 rounded-lg">
                        <div style={{height: 40, width: 40}} className="bg-red-200 rounded-full">
                            <img src={provider?.profile} alt=""
                                    className="w-full h-full object-cover rounded-full"/>
                        </div>
                        <div className="flex flex-col gap-0.5 items-center text-center">
                            <p className="text-sm">{provider?.name}</p>
                            <p className="text-xs text-blue-400">{provider?.category}</p>
                            <p className="text-xs text-muted-foreground">{Number(provider?.price)?.toLocaleString()} TZS</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-sm font-black text-muted-foreground text-right">{serviceProviders.reduce((acc, itr) => acc + Number(itr.price), 0)?.toLocaleString()} TZS</p>
            </div>
        </div>
    )
}