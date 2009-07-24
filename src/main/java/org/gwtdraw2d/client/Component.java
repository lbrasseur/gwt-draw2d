package org.gwtdraw2d.client;

import java.util.Arrays;
import java.util.List;

import com.google.gwt.core.client.JavaScriptObject;

/**
 * Base class for all Draw2d wrapper components.
 * @author lautaro.brasseur
 */
public abstract class Component {
    /**
     * The JavaScriptObject to be wrapped.
     */
    private JavaScriptObject jsObj;

    /**
     * Gets the wrapperd JavaScriptObject. If it is null, it is created.
     * @return The JavaScriptObject
     */
    protected final JavaScriptObject getJsObj() {
        if (jsObj == null) {
            jsObj = create();
        }
        return jsObj;
    }

    /**
     * Abstract method for creating the wrapped JavaScriptObject.
     * @return The JavaScriptObject
     */
    protected abstract JavaScriptObject create();
}
