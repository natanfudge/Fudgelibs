/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from "react";
type DivProps = React.HTMLAttributes<HTMLDivElement>

/**
 * Shorthand for `style = {{display: "flex", flexDirection :"row"}}`
 */
export function Row(props: DivProps) {
    return <div {...withClassName(props,"row")}/>
}
/**
 * Shorthand for `style = {{display: "flex", flexDirection :"row"}}`
 */
export function Column(props: DivProps) {
    return <div {...withClassName(props,"column")}/>
}

/**
 * Has a single parameter, `space`, the specifies the space between every 2 children in rem.
 */
export function SpacedRow(props: DivProps & { space: number }) {
    const {space, ...divProps} = props
    // See Flow.module.css
    return <div {...withDynamicClass(divProps, "row spaced-row", "row-space", `${space}rem`)}/>
}

/**
 * Has a single parameter, `space`, the specifies the space between every 2 children in rem.
 */
export function SpacedColumn(props: DivProps & { space: number }) {
    const {space, ...divProps} = props
    // See Flow.module.css
    return <div {...withDynamicClass(divProps, "column spaced-column", "column-space", `${space}rem`)}/>
}

// A dynamic class is a css class that has a css variable as an input that we specify in the style
function withDynamicClass<T>(tagProps: React.HTMLAttributes<T>, dynamicClass: string, dynamicKey: string, dynamicValue: string): React.HTMLAttributes<T> {
    return {
        ...tagProps,
        className: mergeClassname(tagProps.className, dynamicClass),
        style: mergeStyle(tagProps.style, {[`--${dynamicKey}`]: dynamicValue})
    }
}

function withClassName<T>(props: React.HTMLAttributes<T>, customClassName: string): React.HTMLAttributes<T> {
    return {...props, className: mergeClassname(props.className,customClassName)}
}

function mergeClassname(className: string | undefined, addedClassName: string): string {
    return className === undefined ? addedClassName : `${className} ${addedClassName}`
}


// Allow `object` in addedStyle to not get compile errors with custom attributes
function mergeStyle(style: React.CSSProperties | undefined, addedStyle: React.CSSProperties | object): React.CSSProperties {
    return style === undefined ? addedStyle : {...style, ...addedStyle}
}

