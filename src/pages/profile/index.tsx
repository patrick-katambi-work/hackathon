import { Switch, RadioGroup, RadioGroupItem, Badge } from '@dynamic-gen/avengers-ui';
import profileImage from '../../assets/profile.jpg'
import { Title } from '../../components/ui/title';
import { useLandingPage } from '../landing-page/use-landing-page';
import { BellIcon, LogOut, Palette, ScanFace } from 'lucide-react';
import { useNavigate } from 'react-router';
import ROUTE_NAMES from '../../config/router/route-names';

export function ProfilePage() {
    const navigate = useNavigate()
    const {data} = useLandingPage();
    return (
        <div className={"flex flex-col items-center gap-4 w-full px-4"}>
            <img src={profileImage} alt='profile' className='size-[100px] object-cover rounded-full border-4 border-white shadow-lg' />
            <div className='text-xs text-center space-y-1'>
                <Title level='h3'>{data?.user?.name}</Title>
                <p>{data?.user?.msisdn}</p>
            </div>

            <div className='w-full space-y-2'>
                <p className='text-muted-foreground text-xs'>Your Accounts</p>
                <div className='w-full space-y-0'>
                    <RadioGroup value="option-1" className='grid grid-cols-2 gap-4'>
                        {
                            [
                                {value: "option-1", name: data?.user?.name, kind: "Normal user"},
                                {value: "option-2", name: data?.user?.name, kind: "Service Provider"},
                            ].map(dt => (
                                    <div className="flex items-start space-x-2">
                                        <RadioGroupItem value={dt?.value} id={dt?.value} className='mt-1.5' />
                                        <div className='space-y-1'>
                                            {/* <p className='font-bold text-base'>{dt?.name}</p> */}
                                            <Badge variant={"outline"} className='bg-orange-100 border'>{dt?.kind}</Badge>
                                        </div>
                                    </div>
                            ))
                        }
                    </RadioGroup>
                </div>
            </div>
            
            <div className='w-full space-y-2'>
                <p className='text-muted-foreground text-xs'>Theme settings</p>
                <div className='w-full space-y-0'>
                    <div className='flex items-center gap-2 w-full py-4 border-y px-2'>
                        <Palette size={16} />
                        <p className='text-sm'>Dark Theme</p>
                        <Switch checked={false} className='ml-auto'/>
                    </div>
                </div>
            </div>
            <div className='w-full space-y-2'>
                <p className='text-muted-foreground text-xs'>Privacy & Security</p>
                <div className='w-full space-y-0'>
                    <div className='flex items-center gap-4 w-full py-4 border-y px-2'>
                        <ScanFace size={16} />
                        <p className='text-sm'>Face Id</p>
                        <Switch checked className='ml-auto'/>
                    </div>
                    <div className='flex items-center gap-4 w-full py-4 border-y px-2'>
                        <BellIcon size={16} />
                        <p className='text-sm'>Push Notifications</p>
                        <Switch checked className='ml-auto'/>
                    </div>
                </div>
            </div>
            <div className='w-full space-y-2'>
                <p className='text-muted-foreground text-xs'>Other</p>
                <div className='w-full space-y-0'>
                    <div onClick={() => navigate(ROUTE_NAMES.HOME)} className='cursor-pointer flex items-center gap-4 w-full py-4 border-y text-primary bg-primary/10 px-2'>
                        <LogOut size={16} />
                        <p className='text-sm'>Logout</p>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
}