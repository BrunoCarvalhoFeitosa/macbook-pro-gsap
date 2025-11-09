import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Group, Mesh, Material } from "three"
import { PresentationControls } from "@react-three/drei"
import { ModelMacbook14 } from "@/components/models/model-macbook-14"
import { ModelMacbook16 } from "@/components/models/model-macbook-16"
import { ANIMATION_DURATION, OFFSET_DISTANCE } from "@/utils/constants"

interface ModelSwitcherProps {
  scale: number
  isMobile: boolean
}

const fadeMeshes = (group: Group | null, opacity: number) => {
  if (!group) return

  group.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh
      const material = mesh.material as Material | Material[]

      if (Array.isArray(material)) {
        material.forEach((m) => {
          m.transparent = true
          gsap.to(m, { opacity, duration: ANIMATION_DURATION })
        })
      } else {
        material.transparent = true
        gsap.to(material, { opacity, duration: ANIMATION_DURATION })
      }
    }
  })
}

const moveGroup = (group: Group | null, x: number) => {
  if (!group) {
    return
  }

  gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

export const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  const smallMacBookRef = useRef<Group>(null)
  const largeMacBookRef = useRef<Group>(null)
  const showLargeMacBook = scale === 0.085 || scale === 0.05

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity] as [number, number],
    config: { mass: 1, tension: 0, friction: 26 },
  }

  useGSAP(() => {
    if (showLargeMacBook) {
      moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE)
      moveGroup(largeMacBookRef.current, 0)
      fadeMeshes(smallMacBookRef.current, 0)
      fadeMeshes(largeMacBookRef.current, 1)
    } else {
      moveGroup(smallMacBookRef.current, 0)
      moveGroup(largeMacBookRef.current, OFFSET_DISTANCE)
      fadeMeshes(smallMacBookRef.current, 1)
      fadeMeshes(largeMacBookRef.current, 0)
    }
  }, [scale])

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <ModelMacbook16 scale={isMobile ? 0.05 : 0.085} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <ModelMacbook14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  )
}
