"use client";

import BoxAdvantage from "@/components/BoxAdvantage";
import FadeUp from "@/components/motion/FadeUp";

/**
 * @param {{ advantages: Array<{ id: number, title: string, icon: string, list_details: Array<{ id: number, content: string }> }> }} props
 */
export default function HomeAdvantages({ advantages }) {
  return (
    <section className="ftco-services bg-light">
      <div className="container">
        <div className="row" style={{ position: "relative", zIndex: 2 }}>
          {advantages.map((advantage, index) => (
            <FadeUp
              key={advantage.id}
              className="col-md-4 d-flex self-stretch"
              delayMs={index * 80}
            >
              <BoxAdvantage title={advantage.title} iconClass={advantage.icon}>
                {advantage.list_details.map((detail, detailIndex) => (
                  <li className="marker-primary pl-2" key={detailIndex}>
                    {detail.content}
                  </li>
                ))}
              </BoxAdvantage>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
