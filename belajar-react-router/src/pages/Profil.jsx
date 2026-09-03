/** @format */

import { Code2, GraduationCap, Mail, UserRound } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

function Profil() {
  return (
    <div>
      <SectionTitle
        eyebrow='Profile'
        title='Developer Profile'
        description='Halaman sederhana untuk memperlihatkan data user menggunakan reusable component dan props.'
      />

      <div className='max-w-3xl rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10'>
        <div className='flex flex-col gap-6 sm:flex-row sm:items-center'>
          <div className='flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-purple-700 text-3xl font-bold shadow-xl shadow-violet-600/20'>
            Z
          </div>

          <div>
            <p className='text-sm text-violet-400'>React Learner</p>

            <h2 className='mt-1 text-3xl font-bold'>Zhafran</h2>

            <p className='mt-2 text-zinc-500'>
              Student • Frontend Developer in Progress
            </p>
          </div>
        </div>

        <div className='mt-8 grid gap-3 sm:grid-cols-2'>
          <Info icon={UserRound} label='Role' value='React Learner' />

          <Info
            icon={GraduationCap}
            label='Focus'
            value='Frontend Development'
          />

          <Info icon={Mail} label='Learning' value='React & Modern UI' />

          <Info icon={Code2} label='Project' value='ReactLearn' />
        </div>
      </div>
    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className='rounded-xl border border-white/10 bg-black/10 p-4'>
      <div className='flex items-center gap-3'>
        <Icon size={17} className='text-violet-400' />

        <div>
          <p className='text-[11px] uppercase tracking-wider text-zinc-600'>
            {label}
          </p>

          <p className='mt-1 text-sm text-zinc-300'>{value}</p>
        </div>
      </div>
    </div>
  );
}

export default Profil;
