import DonatDog from '@/public/donation-dog.svg'
import Image from 'next/image'
import Card from '@/public/credit-card.svg'

export default function() {
    return(
        <div className='bg-[#F6F6F6] min-w-screen'>
            <div className='flex gap-[30px] justify-center items-center py-25'>
                <div className='flex w-[605px] justify-center'>
                <Image 
                src={DonatDog}
                alt="Описание" 
                className="overflow-hidden"
                />
                </div>
                <div className='flex flex-col gap-[20px]'>
                    <p className='text-[#545454] text-4xl'>You can also <br /> make a donation</p>
                    <p className='text-[#545454]'>Name of the bank / Type of bank account</p>
                    <div className='flex gap-[15px] bg-[#F1CDB3] h-[52px] rounded-xl px-[15px] w-[450px] py-[10px] items-center cursor-pointer transition-colors duration-300 hover:bg-[#ffc7a2]'>
                    <Image 
                        src={Card}
                        alt="Описание" 
                        className="overflow-hidden"
                    />
                    <p className='text-[#545454] text-2xl'>8380 2880 8028 8791 7435</p>
                    </div>

                        <p className='text-[#B2B2B2] italic'>Legal information and lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac <br /> diam. Praesent ultrices maximus tortor et  vulputate. Interdum et<br /> malesuada fames ac ante ipsum primis in faucibus.</p>
                </div>
            </div>
        </div>
    )
}