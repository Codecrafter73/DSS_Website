import React from 'react'

function Stats() {
  return (
    <div>
                  {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-6 px-4  gap-6 md:gap-6">
            {[
              { number: "800+", label: "Projects" },
              { number: "500+", label: "Clients" },
              { number: "18+", label: "Years" },
              { number: "5+", label: "Branches" },
              { number: "15+", label: "Cities Served" },
              { number: "25+", label: "Awards Won" },
            ].map((stat, i) => (
              <div key={i} className=" py-2 text-center border border-neutral-600 rounded-md">
                <div className="text-2xl md:text-4xl  font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
    </div>
  )
}

export default Stats