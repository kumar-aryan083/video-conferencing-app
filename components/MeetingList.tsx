"use client"
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'


const MeetingList = () => {
    const router = useRouter();
    const [meetingState, setmeetingState] = useState<'isJoinMeeting' | "isScheduleMeeting" | "isInstantMeeting" | undefined>()

    const createMeeting = () => {

    }

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
            <HomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                handleClick={() => setmeetingState("isInstantMeeting")}
                className="bg-orange-1"
            />
            <HomeCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                handleClick={() => setmeetingState("isScheduleMeeting")}
                className="bg-blue-1"
            />
            <HomeCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Checkout your recordings"
                handleClick={() => router.push("/recordings")}
                className="bg-purple-1"
            />
            <HomeCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                description="via invitation link"
                handleClick={() => setmeetingState("isJoinMeeting")}
                className="bg-yellow-1"
            />

            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setmeetingState(undefined)}
                title="Start an instant meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />
        </section>
    )
}

export default MeetingList